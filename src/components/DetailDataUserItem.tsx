import React from 'react'

import { colors, fontSize } from '@/constants/tokens'
import { defaultStyles } from '@/styles'
import { Ionicons } from '@expo/vector-icons'
import { Text, View } from 'react-native'

export declare type DetailDataUserItemProps = {
	label: string
	icon: keyof typeof Ionicons.glyphMap
	gap?: number
	size?: number
}

function DetailDataUserItem({ label, icon, gap = 10, size = 24 }: DetailDataUserItemProps) {
	return (
		<View
			style={{
				flexDirection: 'row',
				gap: gap,
				width: '45%',
				alignItems: 'center',
			}}
		>
			<Ionicons name={icon} size={size} style={{ color: colors.text }} />
			<Text style={[defaultStyles.text, { fontSize: fontSize.sm }]}>{label}</Text>
		</View>
	)
}

export default DetailDataUserItem
