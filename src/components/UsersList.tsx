import { UserListItem } from '@/components/UserListItem'
import { User } from '@/types/user'
import React from 'react'
import { FlatList, FlatListProps, View } from 'react-native'

export declare type IUserListProps = Partial<FlatListProps<unknown>> & {
	users: User[]
}
const ItemDivider = () => <View style={{ marginVertical: 9, marginLeft: 60 }} />

export default function UsersList({ users, ...flatlistProps }: IUserListProps) {
	return (
		<FlatList
			data={users}
			contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
			ItemSeparatorComponent={ItemDivider}
			ListFooterComponent={ItemDivider}
			renderItem={({ item: user }) => <UserListItem user={user as User} />}
			{...flatlistProps}
		/>
	)
}
