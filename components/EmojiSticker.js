import { View, Image } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';


export default function EmojiSticker({ imageSize, stickerSource }) {

    // Bu objeler lokasyonu hallediyor.
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const containerStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: translateX.value },
                { translateY: translateY.value }
            ]
        };
    });
    //Bu obje pan gesture hallediyor.
    const drag = Gesture.Pan()
        .onChange((event) => {
            translateX.value += event.changeX;
            translateY.value += event.changeY;
        });



    // useSharedValue bir hook.
    // imageSize degerini degeri olarak tutmasi icin aliyoruz.
    // Boyutunu arttirip azalticaz.
    const scaleImage = useSharedValue(imageSize);

    // 2 kere tiklayinca(numberOfTaps) boyutu 2 katina cikaricak.
    const doubleTap = Gesture.Tap()
        .numberOfTaps(2)
        .onStart(() => {
            if (scaleImage.value !== imageSize * 2) {
                scaleImage.value = scaleImage.value * 2;
            }
        });

    // Burda React Native Animated kutuphanesini kullandim.
    // https://docs.swmansion.com/react-native-reanimated/docs/animations/withSpring
    // Bu linkte pek cok animasyon var.
    const imageStyle = useAnimatedStyle(() => {
        return {
            width: withSpring(scaleImage.value),
            height: withSpring(scaleImage.value),
        };
    });

    return (
        <GestureDetector gesture={drag}>
            <Animated.View style={[containerStyle, { top: -350 }]}>
                <GestureDetector gesture={doubleTap}>
                    <Animated.Image
                        source={stickerSource}
                        resizeMode="contain"
                        style={[imageStyle, { width: imageSize, height: imageSize }]}
                    />
                </GestureDetector>
            </Animated.View>
        </GestureDetector>
    );
}
