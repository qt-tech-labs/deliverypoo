import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
    AdjustmentsIcon,
    ChevronDownIcon,
    SearchIcon,
    UserIcon
} from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeatureRow from '../components/FeatureRow'

const HomeScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])
    return (
        <SafeAreaView className="bg-white pt-1 px-2">
            {/*Header*/}
            <View className="flex-row pb-3 items-center p-1">
                <Image
                    source={{
                        uri: "https://picsum.photos/200/300"
                    }}
                    className="h-7 w-7 bg-gray-300 mr-1 rounded-full"
                />

                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                    <Text className="font-bold text-xl">Current Location
                        <ChevronDownIcon size={20} color="#00ccbb" />
                    </Text>
                </View>

                <UserIcon size={35} color="#00ccbb" />
            </View>

            {/*Search*/}
            <View className="flex-row items-center pb-1">
                <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                    <SearchIcon />
                    <TextInput
                        placeholder="Restaurant and drinks"
                        keyboard="default"
                    />
                </View>

                <AdjustmentsIcon color="#00ccbb" />
            </View>

            {/*Body*/}
            <ScrollView className="bg-gray-100 mt-2 py-1 rounded"
                contentContainerStyle={{
                    paddingBottom: 100
                }}
            >

                {/* Categories */}

                <Categories />

                {/* Feature row */}
                <FeatureRow
                    title="Offers near you!"
                    desc="What we can give you" />
                <FeatureRow
                    title="Offers near you!"
                    desc="What we can give you" />
                <FeatureRow
                    title="Offers near you!"
                    desc="What we can give you" />
                <FeatureRow
                    title="Offers near you!"
                    desc="What we can give you" />

            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen