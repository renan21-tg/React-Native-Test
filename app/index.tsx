import { Redirect } from 'expo-router'
import { Text, View } from 'react-native';

export default function Index() {
    const isUserLoggedIn = false
    const isLoading = false

    if (isLoading) {
        return (
            <View className='flex justify-center items-center'>
                <Text className='text-orange-500'> Carregando...</Text>
            </View>
        )
    }

    if (!isUserLoggedIn) {
        return <Redirect href="/login" />
    }
}