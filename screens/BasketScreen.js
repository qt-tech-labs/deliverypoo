import { View, Text, TouchableOpacity, Image, Button, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { XIcon } from 'react-native-heroicons/outline'
import Globals from '../Globals'
import { formatCurency, formatDouble } from '../utils/NumberUtils'
import { useNavigation } from '@react-navigation/native'

const BasketScreen = () => {
    const basketItems = useSelector(selectBasketItems)
    const {quantity, total} = useSelector(selectBasketTotal)

    const Item = ({ id, name, desc, price, image, quantity }) => (
        <View
            className="flex-row items-center px-3 py-2 border-y border-gray-200">
            <Text
                className="text-primary">{quantity}x</Text>
            <Image
                source={{
                    uri: image
                }}
                className="w-12 h-12 rounded-full mx-2" />
            <Text
                className="flex-1">{name}</Text>
            <Text
                className="font-bold">${price}</Text>
            <Button
                title="Remove"
                color={Globals.COLOR.GREEN}
                className="text-sm"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )

    const renderItem = ({ item }) => (
        <Item id={item.id} name={item.name} price={item.price} image={item.image} quantity={item.quantity} />
    )

    const navigation = useNavigation()

    return (
        <View className="bg-gray-200 h-full w-full flex-col">
            <View className="h-20 bg-white">
                <View className="flex-col justify-center items-center h-full">
                    <Text className="w-full font-bold text-2xl text-center">Basket</Text>
                    <Text className="w-full font-light text-sm text-center">Nado's</Text>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack()
                    }}
                    className="rounded-full p-2 absolute top-2 right-2 shadow-md">
                    <XIcon size={20} color={Globals.COLOR.GREEN} />
                </TouchableOpacity>
            </View>

            {/* Delivery */}
            <View
                className="flex-row p-2 bg-white my-2 items-center">
                <Image
                    className="w-8 h-8 rounded-full"
                    source={{
                        uri: Globals.IMAGE
                    }}
                />
                <Text className="mx-2 flex-1">Delivery in 50-75 d mins</Text>
                <Button
                    title="Change"
                    color={Globals.COLOR.GREEN}
                    className="text-lg"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>

            {/* Items */}
            <FlatList
                className="flex-1 bg-white"
                data={basketItems}
                renderItem={renderItem}
                keyExtractor={item => item.id} />

            {/* Payment */}
            <View className="bg-white px-3 pt-2 mt-2 pb-10">
                <View className="flex-row items-center my-2">
                    <Text className="flex-1 text-gray-400">Subtotal</Text>
                    <Text className="text-gray-700">{ formatCurency(total)}</Text>
                </View>
                <View className="flex-row items-center my-2">
                    <Text className="flex-1 text-gray-400">Delivery Fee</Text>
                    <Text className="text-gray-700">{ formatCurency(2.5464543)}</Text>
                </View>
                <View className="flex-row items-center my-2">
                    <Text className="flex-1">Order Total</Text>
                    <Text className="font-bold">{ formatCurency(total + 2.5464543)}</Text>
                </View>
                <TouchableOpacity  onPress={() => navigation.navigate(Globals.SCREENS.Delivery)} className="bg-primary rounded-lg py-3">
                    <Text className="text-white font-bold text-2xl w-full text-center">Place Order</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

export default BasketScreen