import { StackNavigationProp } from "@react-navigation/stack"
import { RouteProp } from "@react-navigation/native"

export type NavigationArrowArgs = {
    current_stand_id: number,
    next_stand_id: number,
    data: Data
}

export type Position = {
    x: number,
    y: number
}

export type Data = {
    tags: {
        [key: number]: {
            position: Position,
            angle: number
        }
    }
}

export type StackParams = {
    NavigationArrow: NavigationArrowArgs,
    MainScreen: undefined,
    StartScreen: undefined,
    QrScanScreen: undefined,
    QrScanner: undefined,
    List: undefined,
    EndScreen: undefined
}

export type NavigationArrowNavigationProp = StackNavigationProp<StackParams, 'NavigationArrow'>
export type NavigationArrowRouteProp = RouteProp<StackParams, 'NavigationArrow'>

export interface NavigationArrowProps {
    navigation: NavigationArrowNavigationProp
    route: NavigationArrowRouteProp
}
