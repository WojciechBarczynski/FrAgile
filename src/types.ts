import { StackNavigationProp } from "@react-navigation/stack"
import { RouteProp } from "@react-navigation/native"

export type NavigationArrowArgs = {
    current_stand_id: number,
    next_stand_id: number,
    common_args: CommonArgs
}

export type CommonArgs = {
    data: Data
    stands_list: StandsList
}

export type Position = {
    x: number,
    y: number
}

export type StandInfo = {
    position: Position,
    angle: number,
    floor: number,
    room: string,
    name: string,
    description: string
}

export type StandsList = number[]

export type Data = {
    stands: {
        [key: number]: StandInfo
    }
}

export type StackParams = {
    MainScreen: undefined,
    List: undefined,
    NavigationArrow: NavigationArrowArgs,
    QrScanScreen: CommonArgs,
    QrScanner: CommonArgs,
    EndScreen: undefined,
    CreditsScreen: undefined
}

export type NavigationArrowNavigationProp = StackNavigationProp<StackParams, 'NavigationArrow'>
export type NavigationArrowRouteProp = RouteProp<StackParams, 'NavigationArrow'>

export type NavigationQrScanScreen = StackNavigationProp<StackParams, 'QrScanScreen'>
export type NavigationQrScanScreenRouteProp = RouteProp<StackParams, 'QrScanScreen'>

export type QrScanScreenProps = {
    navigation: NavigationQrScanScreen,
    route: NavigationQrScanScreenRouteProp
}

export interface NavigationArrowProps {
    navigation: NavigationArrowNavigationProp
    route: NavigationArrowRouteProp
}
