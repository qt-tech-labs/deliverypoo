import { View, Text, ScrollView, Image, Pressable, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ArrowLeftIcon, StarIcon, LocationMarkerIcon, QuestionMarkCircleIcon, ChevronLeftIcon, ChevronRightIcon, MinusIcon, PlusIcon } from 'react-native-heroicons/outline'
import Globals from '../Globals'
import MenuItem from '../components/MenuItem'
import { useSelector } from 'react-redux'
import { selectBasketTotal } from '../features/basketSlice'

const RestaurantScreen = () => {
    const { params: {
        id,
        ava,
        name,
        rate,
        categoryId,
        categoryName,
        address
    } } = useRoute()

    const navigation = useNavigation()

    const { quantity, total } = useSelector(selectBasketTotal)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <>
            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 100
                }}
                className="bg-gray-300">
                {/* Images */}
                <View className="relative shadow bg-white">
                    <Image
                        source={{
                            uri: ava
                        }}
                        className="w-full h-56"
                    />
                    <Pressable onPress={() => {
                        navigation.goBack()
                    }} className="absolute top-16 left-5 bg-white rounded-full p-2">
                        <ArrowLeftIcon color={Globals.COLOR.GREEN} />
                    </Pressable>

                </View>

                {/* Main content */}
                <View className=" bg-white px-3 pt-3">
                    <Text className="font-bold text-xl">{name}</Text>
                    <View className="flex-row items-center">
                        <StarIcon color="#41db6d" size={15} />
                        <Text className="text-green-400 text-xs">
                            {rate}
                        </Text>
                        <Text className="text-gray-400 text-xs mr-2">
                            - {categoryName}
                        </Text>
                        <LocationMarkerIcon color="#aabbcc" size={15} />
                        <Text className="text-gray-400 text-xs">
                            Near by - {address}
                        </Text>
                    </View>
                    <Text className="text-sx text-gray-400 mt-5 mb-3">Do proident irure magna amet deserunt Lorem incididunt sit in. Commodo reprehenderit reprehenderit dolore veniam commodo ut. Dolor ipsum irure dolor sint nulla ad laborum. Pariatur minim occaecat nulla enim veniam voluptate deserunt deserunt. Nulla elit nisi Lorem irure aute. Non laboris nostrud minim dolore veniam minim nulla enim cillum non tempor laboris.</Text>
                    <TouchableOpacity className="flex-row items-center border-gray-200 border-y -mx-3 p-3">
                        <QuestionMarkCircleIcon color={Globals.COLOR.DARKGRAY} size={20} />
                        <Text className="font-bold ml-3 flex-1">Have a food alergy?</Text>
                        <ChevronRightIcon color={Globals.COLOR.GREEN} size={20} />
                    </TouchableOpacity>
                </View>

                {/* Menu */}
                <Text className="font-bold text-xl my-3 p-2">Menu</Text>

                {/* Menu item */}
                <MenuItem id="000001" name="Dish 1"
                    desc="Culpa sit magna reprehenderit sunt eiusmod enim est sint eiusmod."
                    price={145.6}
                    image={Globals.IMAGE}
                />
                <MenuItem id="000002" name="Dish 2"
                    desc="Culpa sit magna reprehenderit sunt eiusmod enim est sint eiusmod."
                    price={145.6}
                    image={Globals.IMAGE}
                />
                <MenuItem id="000003" name="Dish 3"
                    desc="Culpa sit magna reprehenderit sunt eiusmod enim est sint eiusmod."
                    price={145.6}
                    image={Globals.IMAGE}
                />
                <MenuItem id="000004" name="Dish 4"
                    desc="Culpa sit magna reprehenderit sunt eiusmod enim est sint eiusmod."
                    price={145.6}
                    image={Globals.IMAGE}
                />
            </ScrollView>
            {quantity > 0 &&
                <View className="absolute bottom-10 w-full z-50">
                    <TouchableOpacity onPress={() => {
                        navigation.navigate(Globals.SCREENS.Basket)
                    }} style={{left: 0, right: 0}} className={`rounded-md bg-primary flex-row items-center mx-5 py-3 px-2 shadow-lg`}>
                        <View className="rounded-md bg-secondary p-1" >
                            <Text className="p-1 text-white">{quantity}</Text>
                        </View>
                        <Text className="text-white flex-1 text-center font-bold text-lg">View basket</Text>
                        <Text className="p-1 text-white rounded-md">${(Math.round(total * 100) / 100).toFixed(2)}</Text>
                    </TouchableOpacity>
                </View>
            }
        </>


    )
}

export default RestaurantScreen