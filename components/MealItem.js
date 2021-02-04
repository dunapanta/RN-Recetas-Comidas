import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    Platform, 
    TouchableOpacity, 
    TouchableNativeFeedback,
    ImageBackground } from 'react-native'

const MeatItem = ({ title, duration, complexity, affordability, image, color, onSelectMeal }) => {
    let TouchableItem = TouchableOpacity

    if(Platform.OS === 'android' && Platform.Version >= 21){
        TouchableItem = TouchableNativeFeedback
    }

    return (
        <View style={styleItem(color).gridItem}>
            <TouchableItem style={styles.touchableItem} onPress={onSelectMeal}>
                <View>
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground source={{uri: image}} style={styles.bgImage}>
                            <View style={styles.titleContainer}>
                            <   Text style={styles.title} numberOfLines={1}>{title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetail}}>
                        <Text>{duration}m</Text>
                        <Text>{complexity.toUpperCase()}</Text>
                        <Text>{affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableItem>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem:{
        flex: 1,
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5'
    },
    touchableItem:{
        flex: 1
    },
    title:{
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    bgImage: {
       width: '100%',
       height: '100%',
       justifyContent: 'flex-end'
    }
})

const styleItem = (color ) => StyleSheet.create({
    gridItem:{
        flex: 1,
        height: 200,
        width: '100%',
        marginBottom: 10,
        backgroundColor: color,
        borderRadius: 10,
        overflow: 'hidden'
    },
})

export default MeatItem