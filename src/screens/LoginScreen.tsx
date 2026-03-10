import { LoginForm } from '@/components/LoginForm'
import { View, Text, Image, Button } from 'react-native'
export function LoginScreen () {
    return (
        <View className='flex-1 bg-taupe-50 justify-center'>
            <View>
                <View className='flex-row items-center justify-center mb-20'>
                    <View>
                        <Image
                            className='w-12 h-12 mr-1'
                            source={require('../assets/prodesksample.jpeg')}
                        />
                    </View>
                    <View>
                        <Text className='text-3xl font-bold'>PRODESK</Text>
                    </View>
                </View>

                <View className='flex items-center mb-20'>
                    <Text className='text-5xl font-semibold mb-3'>Bem Vindo!</Text>
                    <Text className='text-xl text-gray-600'>Preencha suas informacoes para prosseguir</Text>
                </View>

                <LoginForm /> 

            </View>
        </View>
    )
}