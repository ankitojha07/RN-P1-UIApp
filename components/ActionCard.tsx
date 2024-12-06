import {
  View,
  Text,
  Linking,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  function openWebsite(webLink: string) {
    Linking.openURL(webLink);
  }
  return (
    <View style={style.container}>
      <Text style={style.headingText}>Blog Card</Text>
      <View style={[style.card, style.elevatedCard]}>
        <Text style={style.headerTitle}>What's new in Javascript?</Text>

        <View style={style.bodyContainer}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/7775641/pexels-photo-7775641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            }}
            style={style.cardImage}
          />
          <View style={style.bodyRightContent}>
            <Text numberOfLines={3}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quo
              rem reprehenderit animi quisquam autem numquam ut, doloribus.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta,
              pariatur!
            </Text>
            <View style={style.footerContainer}>
              <TouchableOpacity
                onPress={() =>
                  openWebsite('https://reactnative.dev/docs/linking')
                }
                style={style.readMore}>
                <Text style={style.btnText}>Read more.</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => openWebsite('https://x.com/ankitojha_07')}
                style={style.buttonUrls}>
                <Text>Follow me.</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 8,
  },
  headingContainer: {},
  headerTitle: {
    color: '#fff',
    fontSize: 16,
  },
  headingText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 16,
  },
  card: {
    flex: 1,
    flexDirection: 'column',
    gap: 8,
    backgroundColor: '#737E82',
    padding: 8,
    borderRadius: 8,
  },
  elevatedCard: {},
  cardImage: {
    height: 100,
    width: 100,
  },
  bodyContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 8,
  },
  footerContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
  },
  buttonUrls: {
    backgroundColor: '#F3F7F8',
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 4,
    justifyContent: 'center',
    height: 28,
  },
  readMore: {
    backgroundColor: '#F3F7F8',
    color: '#fff',
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 4,
    justifyContent: 'center',
    height: 28,
  },
  btnText: {
    color: '#000',
  },
  bodyRightContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 8,
  },
});

export default ActionCard;
