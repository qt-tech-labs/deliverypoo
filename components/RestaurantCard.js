import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { LocationMarkerIcon, StarIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = ({
    id,
    ava,
    name,
    rate,
    categoryId,
    categoryName,
    address
}) => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity className="bg-white mx-2 pb-2 rounded mt-2 shadow"
        onPress={() => {
            navigation.navigate("Restaurant", {
                id,
                ava,
                name,
                rate,
                categoryId,
                categoryName,
                address     
            })
        }}
        >
        <Image
            source={{
                uri: ava
            }} 
            className="h-40 w-60"
            />
      <Text className="font-bold text-lg ml-2">{name}</Text>
      <View className="flex-row items-center ml-2">
        <StarIcon color="#41db6d" size={15}/>
        <Text className="text-green-400 text-xs">
            {rate}
        </Text>
        <Text className="text-gray-400 text-xs">
             - {categoryName}
        </Text>
      </View>
      <View className="flex-row items-center ml-2">
        <LocationMarkerIcon color="#aabbcc" size={15}/>
        <Text className="text-gray-400 text-xs">
            Near by - {address}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard