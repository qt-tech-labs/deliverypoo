import { View, Text, SafeAreaView, Button, Pressable, Image } from 'react-native'
import React from 'react'
import { XIcon } from 'react-native-heroicons/outline'
import Globals from '../Globals'
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';

const DeliveryScreen = () => {
    const navigation = useNavigation()
    return (
        <View className="bg-primary flex-1">
            <SafeAreaView className="py-2 mx-4 z-50">
                <View className="flex-row justify-between items-center">
                    <Pressable onPress={() => {
                        navigation.goBack()
                    }} className=" rounded-full">
                        <XIcon color={Globals.COLOR.WHITE} size={25} />
                    </Pressable>
                    <Button title='Order help' className="bg-transparent" color={Globals.COLOR.WHITE} />
                </View>
                <View className="bg-white p-5 flex-row rounded-md shadow-md items-center">
                    <View className="flex-1">
                        <Text className="text-gray-500">Estimated Arival</Text>
                        <Text className="text-2xl">45 - 55 minites</Text>
                        <Text className="text-xs text-gray-300">Culpa consectetur occaecat tempor veniam ad magna reprehenderit ex nostrud ea excepteur dolore culpa.</Text>
                        <Progress.Bar indeterminate={true} color={Globals.COLOR.GREEN} className="w-full mt-5" animationType='decay' />
                    </View>
                    <Image
                        source={require("../assets/deli.gif")}
                        size={10}
                        className="w-20 h-20 ml-5" />
                </View>
            </SafeAreaView>
            <MapView
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                className="flex-1 -mt-5"
            >
                <Marker 
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324
                    }}
                    title="Destination"
                    description='Quis non id reprehenderit proident Lorem incididunt incididunt tempor Lorem consequat labore dolore.'
                    pinColor={Globals.COLOR.GREEN}
                    />
            </MapView>

            <SafeAreaView className="bg-white items-center">
                <View className="px-5 py-4 flex-row">
                <Image
                    source={{
                        uri: Globals.IMAGE
                    }}
                    className="h-10 w-10 rounded-full"/>
                <View className="flex-col flex-1 mx-4">
                    <Text className="text-lg">Anothony</Text>
                    <Text className="text-xs text-gray-300">Your driver</Text>
                </View>
                <Pressable >
                    <Text className="text-primary text-2xl"> Call</Text>
                </Pressable>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default DeliveryScreen