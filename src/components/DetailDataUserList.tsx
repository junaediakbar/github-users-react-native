import DetailDataUserItem, { DetailDataUserItemProps } from '@/components/DetailDataUserItem'
import { FlatList, View } from 'react-native'

const DetailDataUserList = ({ data }: { data: DetailDataUserItemProps[] }) => {
	return (
		<FlatList
			style={{ marginTop: 20 }}
			scrollEnabled={false}
			data={data}
			numColumns={2}
			columnWrapperStyle={{ justifyContent: 'space-between' }}
			ItemSeparatorComponent={() => <View style={{ width: 16, height: 12 }} />}
			renderItem={({ item, index }) => <DetailDataUserItem label={item.label} icon={item.icon} />}
		/>
	)
}

export default DetailDataUserList
