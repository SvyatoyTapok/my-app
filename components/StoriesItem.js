import {Text,View, Image} from 'react-native';
import styles from './styles';

function StoriesItem({imageSrc, storyText}) {
    return(
        <View style={[styles.storyComponent]}>
            <Text style={[styles.textStoryItem]}>{storyText}</Text>
            <Image style={[styles.imageStoryItem]} source={{uri: imageSrc}}/>
        </View>
    )
}

export default StoriesItem