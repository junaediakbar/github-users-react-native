import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import { View } from 'react-native'

const ProfileScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						headerShown: false,
						headerTitle: 'Profile',
					}}
				/>
			</Stack>
		</View>
	)
}

export default ProfileScreenLayout
