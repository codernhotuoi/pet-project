import { Dimensions, PixelRatio } from 'react-native'
import { initialWindowMetrics } from 'react-native-safe-area-context'

const DESIGN_WIDTH = 375
const DESIGN_HEIGHT = 812
const { width, height } = Dimensions.get('window')
const { width: widthScreen, height: heightScreen } = Dimensions.get('screen')
export const globalDimension = {
    scaleWidth: width / DESIGN_WIDTH,
    scaleHeight: height / DESIGN_HEIGHT,
    scaleMs: width >= 620 ? height / DESIGN_HEIGHT : width / DESIGN_WIDTH,
    scaleFont: width >= 620 ? height / DESIGN_HEIGHT - 0.1 : width / DESIGN_WIDTH,
    width,
    height,
}

const deviceHeight = height - (initialWindowMetrics?.insets.top ?? 0)

export const caculateScale = () => {
    const { width, height } = Dimensions.get('window')
    // const divideWidth =  width / DESIGN_WIDTH
    globalDimension.scaleWidth = width / DESIGN_WIDTH
    globalDimension.scaleHeight = height / DESIGN_HEIGHT
    globalDimension.scaleMs = width >= 620 ? globalDimension.scaleHeight : globalDimension.scaleWidth
    globalDimension.scaleFont = width >= 620 ? globalDimension.scaleHeight - 0.1 : globalDimension.scaleWidth
    globalDimension.width = width
    globalDimension.height = height

    console.log('Change: ', globalDimension)
    // return {width : width / DESIGN_WIDTH, height: height / DESIGN_HEIGHT}
}

export const responsiveHeight = (h) => globalDimension.width * (h / 100)
export const WIDTH = (w) => w * globalDimension.scaleWidth
export const HEIGHT = (h) => h * globalDimension.scaleHeight
export const RATE = (n, rate = 1) => {
    if (globalDimension.width < globalDimension.height) return n * globalDimension.scaleWidth
    return ((n * globalDimension.width) / globalDimension.height) * globalDimension.scaleHeight * rate
}

export const WIDTH_SCREEN = () => widthScreen * (w / DESIGN_WIDTH)
export const HEIGHT_SCREEN = () => heightScreen * (h / DESIGN_HEIGHT)

export const getWidth = () => globalDimension.width
export const getHeight = () => globalDimension.height

export const getHighAbsolute = (h) => globalDimension.height * (h / 812)
export const getInsetVertical = () =>
    (initialWindowMetrics?.insets.top ?? 0) + (initialWindowMetrics?.insets.bottom ?? 0)

/* old get font function */
// export const getFont = (f: number): number => {
//   return RFValue(f);
// };
// let fontScale = width >= 720 ? globalDimension.scaleHeight - 0.1 : globalDimension.scaleWidth
// let ms = width >= 720 ? globalDimension.scaleHeight : globalDimension.scaleWidth
export const MS = (h) => h * globalDimension.scaleMs
export const getFont = (f) => {
    return PixelRatio.roundToNearestPixel(globalDimension.scaleFont * f)
}

export const getLineHeight = getFont
