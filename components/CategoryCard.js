import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({img, title}) => {
  return (
    <TouchableOpacity className="relative mx-1">
        <Image
            source={{
                uri: img
            }}
            className="h-20 w-20 rounded"
            />
      <Text className="absolute bottom-1 left-1 text-white text-xs">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard