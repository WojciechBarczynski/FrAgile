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

export type StandInfo = {
    position: Position,
    angle: number,
    floor: number,
    room: string,
    name: string,
    description: string
}

export type Data = {
    stands: {
        [key: number]: StandInfo
    }
}

export type StackParams = {
    NavigationArrow: NavigationArrowArgs,
    MainScreen: undefined,
    StartScreen: undefined,
    QrScanScreen: undefined,
    QrScanner: undefined,
    List: undefined
}

export type NavigationArrowNavigationProp = StackNavigationProp<StackParams, 'NavigationArrow'>
export type NavigationArrowRouteProp = RouteProp<StackParams, 'NavigationArrow'>

export interface NavigationArrowProps {
    navigation: NavigationArrowNavigationProp
    route: NavigationArrowRouteProp
}