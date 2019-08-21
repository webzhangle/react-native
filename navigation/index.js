import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer
  } from 'react-navigation'
  import One from '../pages/One'
  import Two from '../pages/Two'
  import Three from '../pages/Three'
  const BottomBar = createBottomTabNavigator(
    {
      One: {
        screen: One,
        navigationOptions: {
          title: 'One'
        }
      },
      Two: {
        screen: Two,
        navigationOptions: {
          title: 'Two'
        }
      },
      Three: {
        screen: Three,
        navigationOptions: {
          title: 'Three'
        }
      }
    },
    {
      initialRouteName: 'One' // 初始化页面
    }
  )
  const Stack = createStackNavigator({
    BottomBar: {
      screen: BottomBar,
      navigationOptions: {
        header: null
      }
    }
  })
  
  export default createAppContainer(BottomBar)
  