import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard img="https://picsum.photos/200/300" title="Testing title" />
      <CategoryCard img="https://picsum.photos/200/300" title="Testing title" />
      <CategoryCard img="https://picsum.photos/200/300" title="Testing title" />
      <CategoryCard img="https://picsum.photos/200/300" title="Testing title" />
      <CategoryCard img="https://picsum.photos/200/300" title="Testing title" />
      <CategoryCard img="https://picsum.photos/200/300" title="Testing title" />
    </ScrollView>
  )
}

export default Categories