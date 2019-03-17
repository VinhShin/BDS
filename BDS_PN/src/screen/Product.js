import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Animated,
    Dimensions
} from 'react-native';
import Slideshow from 'react-native-image-slider-show';
import {ButtonDashBoardFull} from '../components/Custome'
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';
import {SquarePagerView} from '../components/PaperItem/PagerItemView'
const windowWidth = Dimensions.get('window').width;

export default class Product extends Component{
    render(){
        return (
             <View style={{flex:1}}>
                <Slideshow 
                    arrowLeft = {null}
                    dataSource={[
                        { url:'https://upload.wikimedia.org/wikipedia/commons/e/e9/Legg_Mason_Building.jpg' },
                        { url:'https://img-new.cgtrader.com/items/57196/02ff087a24/tall-building-with-glass-exterior-in-town-3d-model-max.jpg' },
                        { url:'https://img-new.cgtrader.com/items/57196/eee3447a0f/tall-building-with-glass-exterior-in-town-3d-model-max.jpg' }
                    ]}/>
                <View>
                    <ButtonDashBoardFull/>
                </View>
                <Animated.View style={{flex: 1, backgroundColor: "white"}} >
                    <IndicatorViewPager
                        style={{flex: 1, flexDirection: 'column-reverse'}}
                        indicator={this._renderTitleIndicator()}
                    >
                        {SquarePagerView()}
                        {SquarePagerView()}
                        {SquarePagerView()}

                    </IndicatorViewPager>
            </Animated.View>
               
            </View>
                
        )
    }
    _renderTitleIndicator () {
        return (
            <PagerTitleIndicator
                style={styles.indicatorContainer}
                trackScroll={true}
                itemTextStyle={styles.indicatorText}
                itemStyle={{width:windowWidth/2}}
                selectedItemStyle={{width:windowWidth/2}}
                selectedItemTextStyle={styles.indicatorSelectedText}
                selectedBorderStyle={styles.selectedBorderStyle}
                titles={['BĐS đang đầu tư', 'BĐS đã hoàn thành']}
            />
        )
    }
}


const styles = StyleSheet.create({
    indicatorContainer: {
        backgroundColor: 0x00000020,
        height: 48
    },
    indicatorText: {
        fontSize: 14,
        color: "black"
    },
    indicatorSelectedText: {
        fontSize: 14,
        color: "black"
    },
    selectedBorderStyle: {
        height: 3,
        backgroundColor: 'red'
    },
    statusBar: {
        height: 24,
        backgroundColor: 0x00000044
    },
    toolbarContainer: {
        height: 56,
        backgroundColor: 0x00000020,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    backImg: {
        width: 16,
        height: 17
    },
    titleTxt: {
        marginLeft: 36,
        color: 'white',
        fontSize: 20
    }
})