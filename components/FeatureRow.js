import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeatureRow = ({title, desc, featureCategory}) => {
  return (
    <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
            <Text className="font-bold text-lg">{title}</Text>
            <ArrowRightIcon color="#00ccbb"/>
        </View>
        <Text className="text-xs text-gray-300 px-4">{desc}</Text>

        <ScrollView 
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15,
            }}
            showsHorizontalScrollIndicator={false}
            className="pb-3"
            >
                {/* Restaurant card */}
                <RestaurantCard id="0001" name="Test rest name" ava="https://picsum.photos/200/300" rate="3.5" categoryName="Sushi" address="Hanoi" />
                <RestaurantCard name="Test rest name 2" ava="https://picsum.photos/200/300" rate="3.5" categoryName="Sushi" address="Hanoi" />
                <RestaurantCard name="Test rest name 3" ava="https://picsum.photos/200/300" rate="3.5" categoryName="Sushi" address="Hanoi" />
                <RestaurantCard name="Test rest name 4" ava="https://picsum.photos/200/300" rate="3.5" categoryName="Sushi" address="Hanoi" />
                <RestaurantCard name="Test rest name 5" ava="https://picsum.photos/200/300" rate="3.5" categoryName="Sushi" address="Hanoi" />
                <RestaurantCard name="Test rest name 6" ava="https://picsum.photos/200/300" rate="3.5" categoryName="Sushi" address="Hanoi" />
                <RestaurantCard name="Test rest name 7" ava="https://picsum.photos/200/300" rate="3.5" categoryName="Sushi" address="Hanoi" />
                <RestaurantCard name="Test rest name 8" ava="https://picsum.photos/200/300" rate="3.5" categoryName="Sushi" address="Hanoi" />
            </ScrollView>

    </View>
  )
}

export default FeatureRow