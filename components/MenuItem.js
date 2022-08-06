import { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { MinusIcon, PlusIcon } from 'react-native-heroicons/outline'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToBasket, removeItemFromBasket, selectItemsWithID } from '../features/basketSlice'
import Globals from '../Globals'

const MenuItem = ({id, name, desc, price, image}) => {
    const dispatch = useDispatch()

    const items = useSelector((state) => selectItemsWithID(state, id))
    
    const addToBasket = () => {
        dispatch(addItemToBasket({id, name, desc, price, image}))
    }
    return (
        <View className="bg-white p-2 mt-1">
            <View className="flex-row items-center">
                <View className="flex-col flex-1">
                    <Text className="font-bold text-xl">{name}</Text>
                    <Text className="font-light text-gray-300">{desc}</Text>
                </View>

                <Image
                    source={{
                        uri: image
                    }}
                    className="h-24 w-24 rounded-sm" />
            </View>
            <View className="flex-row mt-2">
                <Text className="flex-1 text-gray-300 font-medium">${price}</Text>
                <View className="flex-row items-center">
                    <TouchableOpacity disabled={(items[0]?.quantity ?? 0) == 0} onPress={() => {
                        dispatch(removeItemFromBasket({id}))
                    }} className={`p-1 ${(items[0]?.quantity ?? 0) == 0 ? "bg-gray-300" : "bg-primary"} rounded-full`}>
                        <MinusIcon color={Globals.COLOR.WHITE} size={20} />
                    </TouchableOpacity>
                    <Text className="w-5 text-center">{items[0]?.quantity ?? 0}</Text>
                    <TouchableOpacity onPress={() => {
                        addToBasket()
                    }} className="p-1 bg-primary rounded-full">
                        <PlusIcon color={Globals.COLOR.WHITE} size={20} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default MenuItem