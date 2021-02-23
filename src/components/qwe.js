
import * as React from 'react';
import { ScrollView, View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, ActivityIndicator, Pressable, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ListItem, ButtonGroup, Button, Icon, Divider } from 'react-native-elements'
import { StackNavigationProp } from '@react-navigation/stack';
import ActionSheet from "react-native-actions-sheet";
import type { MatchResult, RootStackParamList } from '../components/types'
import Globals from '../globals'
import { color } from 'react-native-reanimated';

type RankingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SingleMatches'>;

type SingleMatchesProps = {

    navigation: RankingScreenNavigationProp;
};

type SingleMatchesState = {

    isLoading: boolean,
    isRefreshing: boolean,
    wins?: MatchResult[],
    losses?: MatchResult[],
    matches?: MatchResult[]
}

export class SingleMatchesScreen extends React.Component<SingleMatchesProps, SingleMatchesState> {

    sheetRef: any;

    constructor(props: SingleMatchesProps) {
        super(props);

        this.sheetRef = React.createRef<ActionSheet>();

        this.state = {

            isLoading: false,
            isRefreshing: false,
        };
    }

    componentDidMount() {

        this.getMatchData('XD A')
    }

    async getMatchData(categoryName: string) {

        this.setState({ isLoading: true });

        fetch(Globals.API_URL + '/api/players/getMyMatches', {
            method: 'POST',
            body: JSON.stringify({ categoryName: categoryName })
        }).then(async response => {

            //console.log(response);
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }

            let wins: MatchResult[] = [];
            let losses: MatchResult[] = [];
            let matches: MatchResult[] = [];

            const aliases = data.playerData;

            for (let index = 0; index < aliases.length; index++) {

                const alias = aliases[index];

                wins = wins.concat(alias.wins);
                losses = losses.concat(alias.losses);
                matches = matches.concat(alias.wins);
                matches = matches.concat(alias.losses);
            }

            this.setState({

                wins: wins,
                losses: losses,
                matches: matches,
                isLoading: false
            });
        })
            .catch(error => {
                //this.setState({ error, isLoading: false });
                console.error('There was an error!', error);
            });
    }

    refresh() {
        //this.getRanking(this.state.categoryNames[this.state.activeCategoryIndex],true)


    }

    getInitals(name: string): string {

        const names = name.split(' ');

        return names[0].charAt(0) + names[names.length - 1].charAt(0)
    }

    render() {

        StatusBar.setBarStyle('light-content');

        return (
            <View style={{ height: '100%', backgroundColor: '#258C60' }}>
                {(this.state.matches != null) && (
                    <SafeAreaView style={{ height: '100%', }}>
                        <View style={{ padding: 25 }}>
                            <View style={{}}>
                                <Text style={{ color: 'white', fontSize: 32, fontWeight: '700' }}>My Single Matches</Text>
                            </View>
                        </View>

                        <View style={{ height: '100%', backgroundColor: '#eee' }}>
                            <ScrollView refreshControl={
                                <RefreshControl refreshing={this.state.isRefreshing} onRefresh={() => this.refresh()} />
                            }>
                                {this.state.isLoading ? (

                                    Morten Petersen, [20.01.21 14:19]
<>
                                    <ActivityIndicator size='large' style={{ marginTop: 200, marginBottom: 15 }} />
                                    <Text style={{ color: '#575757', fontSize: 18, fontWeight: '500', textAlign: 'center' }}>Loading Data...</Text>
                                </>
                                ) : (
                                        this.state.matches.map((match, index) => (
                                            <ListItem containerStyle={{ padding: 0 }} key={index} bottomDivider >
                                    <ListItem.Content>

                                        <View style={{ flexDirection: 'row', backgroundColor: '#f3f3f3', margin: 0, width: '100%', height: 32 }}>
                                            <View style={{ marginLeft: 20, flexDirection: 'row' }}>
                                                <Text style={{ color: '#258C60', alignSelf: 'center', fontSize: 12, fontWeight: '700' }}> {match.tournament?.title} </Text>
                                                <Text style={{ color: '#258C60', alignSelf: 'center', fontSize: 12, fontWeight: '700', textAlign: 'right' }}> {new Date(match.date).toDateString()} </Text>
                                            </View>
                                        </View>

                                        <View style={{ flexDirection: 'row', marginLeft: 10, marginRight: 10, padding: 10, borderColor: '#ececec', borderBottomWidth: 1, width: '100%' }}>
                                            <View style={[styles.avatarView, { backgroundColor: 'grey' }]}>
                                                {match.winners[0].User != null ? (
                                                    <Image style={{ width: 32, height: 32, borderRadius: 50 }} source={{ uri: match.winners[0].User.profileImageUrl }} />
                                                ) : (
                                                        <Text style={styles.avatarText}> {this.getInitals(match.winners[0].name)} </Text>
                                                    )}
                                            </View>
                                            <View style={[styles.avatarView, { backgroundColor: '#F9C81C' }]}>
                                                {match.winners[1].User != null ? (
                                                    <Image style={{ width: 32, height: 32, borderRadius: 50 }} source={{ uri: match.winners[1].User.profileImageUrl }} />
                                                ) : (
                                                        <Text style={styles.avatarText}> {this.getInitals(match.winners[1].name)} </Text>
                                                    )}
                                            </View>

                                            {match.score.toLowerCase() == 'walkover' ? (
                                                <View style={{ padding: 7 }}><Text style={{ fontWeight: '600' }}>Winner</Text></View>
                                            ) : (
                                                    <>
                                                        <View style={{ borderColor: '#ececec', borderRightWidth: 1, padding: 7 }}>
                                                            <Text>{match.score.split(' ')[0].split('-')[0]}</Text>
                                                        </View>
                                                        <View style={{ borderColor: '#ececec', borderRightWidth: 1, padding: 7 }}>
                                                            <Text>{match.score.split(' ')[1].split('-'

Morten Petersen, [20.01.21 14:19]
)[0]}</Text>
                                                        </View>
                                                        {match.score.split(' ').length > 2 && (
                                                            <View style={{ borderColor: '#ececec', borderRightWidth: 1, padding: 7 }}>
                                                                <Text>{match.score.split(' ')[2].split('-')[0]}</Text>
                                                            </View>
                                                        )}
                                                    </>
                                                )}
                                        </View>

                                        <View style={{ flexDirection: 'row', marginLeft: 10, marginRight: 10, padding: 10 }}>
                                            <View style={[styles.avatarView, { backgroundColor: 'grey' }]}>
                                                {match.losers[0].User != null ? (
                                                    <Image style={{ width: 32, height: 32, borderRadius: 50 }} source={{ uri: match.losers[0].User.profileImageUrl }} />
                                                ) : (
                                                        <Text style={styles.avatarText}> {this.getInitals(match.losers[0].name)} </Text>
                                                    )}
                                            </View>
                                            <View style={[styles.avatarView, { backgroundColor: '#F9C81C' }]}>
                                                {match.losers[1].User != null ? (
                                                    <Image style={{ width: 32, height: 32, borderRadius: 50 }} source={{ uri: match.losers[1].User.profileImageUrl }} />
                                                ) : (
                                                        <Text style={styles.avatarText}> {this.getInitals(match.losers[1].name)} </Text>
                                                    )}
                                            </View>

                                            {match.score.toLowerCase() == 'walkover' ? (
                                                <View style={{ padding: 7 }}><Text style={{ color: 'grey' }}>Walkover</Text></View>
                                            ) : (
                                                    <>
                                                        <View style={{ borderColor: '#ececec', borderRightWidth: 1, padding: 7 }}><Text>{match.score.split(' ')[0].split('-')[1]}</Text></View>
                                                        <View style={{ borderColor: '#ececec', borderRightWidth: 1, padding: 7 }}><Text>{match.score.split(' ')[1].split('-')[1]}</Text></View>
                                                        {match.score.split(' ').length > 2 && (
                                                            <View style={{ borderColor: '#ececec', borderRightWidth: 1, padding: 7 }}><Text>{match.score.split(' ')[2].split('-')[1]}</Text></View>
                                                        )}
                                                    </>
                                                )}
                                        </View>


                                    </ListItem.Content>
                                </ListItem>
                                        )))
                                }
                            </ScrollView>
                        </View>
                    </SafeAreaVi

Morten Petersen, [20.01.21 14:19]
ew>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    avatarView: { height: 32, width: 32, justifyContent: 'center', borderRadius: 32, marginRight: 5 },
    avatarText: { color: 'white', alignSelf: 'center', fontSize: 12, fontWeight: '700' }
});