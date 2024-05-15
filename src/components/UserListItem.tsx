import { colors, fontSize } from '@/constants/tokens'
import { defaultStyles } from '@/styles'
import { User } from '@/types/user'
import { Link } from 'expo-router'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

export type UserListItemProps = {
	user: User
}

export const UserListItem = ({ user }: UserListItemProps) => {
	const isActiveUser = false

	return (
		<Link
			href={{
				pathname: '/home/details',
				params: {
					name: user.login,
				},
			}}
			asChild
		>
			<TouchableHighlight>
				<View style={styles.UserItemContainer}>
					<View>
						<Image
							source={{ uri: user.avatar_url }}
							style={{
								...styles.UserArtworkImage,
								opacity: isActiveUser ? 0.6 : 1,
							}}
						/>
					</View>

					{/* User title + artist */}
					<View style={{ width: '100%' }}>
						<Text
							numberOfLines={1}
							style={{
								...styles.UserTitleText,
								color: isActiveUser ? colors.primary : colors.text,
							}}
						>
							{user.login}
						</Text>

						{user.login && (
							<Text numberOfLines={1} style={styles.UserArtistText}>
								{user.login}
							</Text>
						)}
					</View>
				</View>
			</TouchableHighlight>
		</Link>
	)
}

const styles = StyleSheet.create({
	UserItemContainer: {
		padding: 16,
		borderColor: '#fff',
		borderWidth: 0.5,
		borderRadius: 16,
		flexDirection: 'row',
		columnGap: 14,
		alignItems: 'center',
	},
	UserArtworkImage: {
		borderRadius: 50,
		width: 50,
		height: 50,
	},
	UserTitleText: {
		...defaultStyles.text,
		fontSize: fontSize.sm,
		fontWeight: '600',
		maxWidth: '90%',
	},
	UserArtistText: {
		...defaultStyles.text,
		color: colors.textMuted,
		fontSize: 14,
		marginTop: 4,
	},
})
