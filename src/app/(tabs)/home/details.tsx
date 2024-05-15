import { DetailDataUserItemProps } from '@/components/DetailDataUserItem'
import DetailDataUserList from '@/components/DetailDataUserList'
import { screenPadding } from '@/constants/tokens'
import { getDetailUserFromApi } from '@/lib/api'
import { defaultStyles } from '@/styles'
import { UserDetail } from '@/types/user'
import { useLocalSearchParams } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

export default function DetailScreen() {
	const params = useLocalSearchParams()
	const [detailUser, setDetailUser] = useState<UserDetail>()
	const [listDetail, setListDetail] = React.useState<DetailDataUserItemProps[]>([])
	const [isLoading, setIsLoading] = React.useState(true)

	const { name } = params

	async function fetchData(username: string) {
		try {
			const res = await getDetailUserFromApi(username)
			return res
		} catch (e) {
			console.error('Error fetching data:', e)
			throw e
		}
	}

	useEffect(() => {
		if (name == undefined) return
		const getData = setTimeout(() => {
			fetchData(name as string).then((res: UserDetail) => {
				setDetailUser(res)
				setListDetail([
					{
						label: res.followers + ' Followers',
						icon: 'person-add',
					},
					{
						label: res.following + ' Following',
						icon: 'people',
					},
					{
						label: res.public_repos + ' Repositories',
						icon: 'folder',
					},
					{
						label: res.public_gists + ' Gists',
						icon: 'code-slash',
					},
				])
			})
		}, 300)
		return () => clearTimeout(getData)
	}, [name])
	return (
		<View style={defaultStyles.container}>
			<ScrollView style={{ paddingHorizontal: screenPadding.horizontal }}>
				<View style={{ alignItems: 'center', marginTop: 40 }}>
					<Image
						source={{
							uri: detailUser?.avatar_url,
						}}
						style={{ width: 100, height: 100, borderRadius: 100, marginBottom: 20 }}
					></Image>
					<Text style={[defaultStyles.text, { fontWeight: 'bold' }]}>{name}</Text>
					<DetailDataUserList data={listDetail} />
				</View>
			</ScrollView>
		</View>
	)
}
