/**
 * Classes gerant la création dynamique de navigations view
 */
 import {Text} from 'react-native'
 import {StyleSheet,View} from "react-native" ;
 import React, {Component} from 'react';
 import { createDrawerNavigator} from '@react-navigation/drawer';
export class NavigationView{
    content = [];
    constructor(array){
        this.DrawerNav= createDrawerNavigator();
        array.forEach(element => {
            this.content.push(<this.DrawerNav.Screen name = {element}  
            component = {ItemNavigationView.SimpleMenuItem(element)} />);
        });
        /*this.DrawerNav.
        categories.map(category => {
            routeConfig[category.key] = {
                screen: CategoryScreen, // your template screen, common to every item
                navigationOptions: (props) => {
                    props.navigation.setParams({ category });
                }
            }
        });*/
    }
    render(){
        return ( <this.DrawerNav>{this.content}</this.DrawerNav>);
    }
    
}

/**
 * Classe representant un itemMenu
 */
class ItemNavigationView{
    static SimpleMenuItem(text){
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{text}</Text>
            </View>
        );
    }
    constructor(typeItem , title){
        this.title = title;
        this.typeItem = typeItem;
    }
    
    getTypeItem() {
        return this.typeItem;    
    }
}
export class TypeItemNavigationView{
    static get SIMPLE_ITEM(){return "SIMPLE_ITEM"} //can be clickeable
    /**
     * represent an item cann't be clickeable but be scrollable
     */
    static get MENU_ITEM(){return "MENU_ITEM"} 
    static get SUBMENU_ITEM(){return "SUBMENU_ITEM"} //can be clickeable and scrollable
}