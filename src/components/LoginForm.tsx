import { View, Text, TextInput } from 'react-native' 

export function LoginForm () {
    return (
        <View className='items-center'>
            <View className='w-5/6 mb-8'>
                <Text className='text-gray-800 pb-2 pl-2'>Email </Text>
                <TextInput
                    className='border border-gray-500 w-full rounded-xl pl-2'
                    placeholder='name@example.com'
                />
            </View>

            <View className='w-5/6 mb-6'>
                <Text className='text-gray-800 pb-2 pl-2'>Senha </Text>
                <TextInput
                    className='border border-gray-500 w-full rounded-xl pl-2'
                    placeholder='Insira sua senha'
                />
            </View>

            <View className='mb-10'>
                <Text className='text-md font-semibold text-orange-700'>Esqueceu a senha?</Text>
            </View>

            <View className='flex justify-center items-center bg-orange-400 px-32 py-5 rounded-xl'>
                <Text className='text-white font-semibold'>Entrar</Text>
            </View>
            
        </View>
    )
}