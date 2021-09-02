import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  View,
  Mesh,
  Image,
  VrButton
} from 'react-vr';

const DEFAULT_ANIMATION_BUTTON_RADIUS = 50;
const DEFAULT_ANIMATION_BUTTON_SIZE = 0.05;

var Directions = {
  North :       [0,     -0.4,   -1],
  NorthEast1:   [0.35,   -0.4,   -0.95],
  NorthEast :   [0.7,   -0.4,   -0.7],
  NorthEast2:   [0.90,   -0.4,   -0.35],
  East :        [1,     -0.4,   0],
  SouthEast1 :   [0.35,   -0.4,   0.95],
  SouthEast :   [0.7,   -0.4,   0.7],
  SouthEast2 :   [0.90,   -0.4,   0.35],
  South :       [0,     -0.4,   1],
  SouthWest1 :   [-0.35,  -0.4,   0.95],
  SouthWest :   [-0.7,  -0.4,   0.7],
  SouthWest2 :   [-0.90,  -0.4,   0.35],
  West:         [-1,    -0.4,   0],
  NorthWest1:    [-0.35,  -0.4,   -0.95],
  NorthWest:    [-0.7,  -0.4,   -0.7],
  NorthWest2:   [-0.90,   -0.4,   -0.35]
};

const rotate = [90,0,0];

class CampusTour extends React.Component {

  constructor (props) {
    super(props);    
      this.state =  {
        scenes: [{scene_image: 'UG-Entrance.jpg', step: 1, navigations: [{step:2, translate: Directions.North, rotation: rotate },
          {step:3, translate: Directions.NorthWest2, rotation: rotate },
          {step:4, translate: Directions.SouthWest1, rotation: rotate },
          {step:5, translate: Directions.SouthWest, rotation: rotate },
          {step:6, translate: Directions.SouthWest2, rotation: rotate }] },
  {scene_image: 'UG-OldCanteen.jpg', step: 2, navigations: [{step:1, translate: Directions.SouthEast1, rotation: rotate },
    {step:38, translate: Directions.NorthWest1, rotation: rotate }]},
  {scene_image: 'UG-ScienceBlock.jpg', step: 3, navigations: [{step:1, translate: Directions.NorthWest1, rotation: rotate },
         {step:6, translate: Directions.SouthEast2, rotation: rotate },
         {step:8, translate: Directions.South, rotation: rotate }]},
  {scene_image: 'UG-AuditoriumPassage.jpg', step: 4, navigations: [{step:1, translate: Directions.SouthWest1, rotation: rotate },
             {step:7, translate: Directions.NorthEast, rotation: rotate }]},
  {scene_image: 'UG-HostelBlock1.jpg', step: 5, navigations: [{step:1, translate: Directions.East, rotation: rotate },
         {step:13, translate: Directions.NorthEast1, rotation: rotate },
         {step:6, translate: Directions.NorthWest, rotation: rotate },
         {step:22, translate: Directions.SouthWest, rotation: rotate }]},
  {scene_image: 'UG-Quadrangle1.jpg', step: 6, navigations: [ {step:5, translate: Directions.South, rotation: rotate },
         {step:5, translate: Directions.East, rotation: rotate },         
         {step:3, translate: Directions.NorthEast1, rotation: rotate },
         {step:27, translate: Directions.NorthWest2, rotation: rotate }]},
  {scene_image: 'UG-Auditorium.jpg', step: 7, navigations: [{step:4, translate: Directions.SouthEast, rotation: rotate }]},
  {scene_image: 'UG-ScienceBlockFF0.jpg', step: 8, navigations: [{step:3, translate: Directions.SouthWest2, rotation: rotate },
           {step:9, translate: Directions.NorthWest1, rotation: rotate },
           {step:12, translate: Directions.NorthWest, rotation: rotate },]},
  {scene_image: 'UG-ScienceBlockFF1.jpg', step: 9, navigations: [{step:10, translate: Directions.SouthWest, rotation: rotate },
           {step:8, translate: Directions.NorthEast, rotation: rotate }]},
  {scene_image: 'UG-ScienceBlockFF2.jpg', step: 10, navigations: [{step:9, translate: Directions.NorthWest1, rotation: rotate },
           {step:13, translate: Directions.NorthEast, rotation: rotate }]},
  {scene_image: 'UG-ScienceBlockSF1.jpg', step: 12, navigations: [ {step:8, translate: Directions.NorthWest, rotation: rotate },
            {step:18, translate: Directions.North, rotation: rotate },
            {step:16, translate: Directions.NorthEast, rotation: rotate }]},
  {scene_image: 'UG-ScienceBlockFF3.jpg', step: 13, navigations: [{step:14, translate: Directions.NorthWest, rotation: rotate },
     {step:10, translate: Directions.NorthEast1, rotation: rotate },
    {step:5, translate: Directions.SouthWest, rotation: rotate }]},
  {scene_image: 'UG-ScienceBlockFF4.jpg', step: 14, navigations: [{step:13, translate: Directions.West, rotation: rotate },
                  {step:15, translate: Directions.NorthEast1, rotation: rotate }]},
  {scene_image: 'UG-ScienceBlockSF3.jpg', step: 15, navigations: [{step:14, translate: Directions.SouthWest, rotation: rotate },
    {step:17, translate: Directions.NorthWest2, rotation: rotate },
    {step:16, translate: Directions.North, rotation: rotate }]},
  {scene_image: 'UG-ScienceBlockSF2.jpg', step: 16, navigations: [{step:15, translate: Directions.South, rotation: rotate },
             {step:12, translate: Directions.North, rotation: rotate }]},
  {scene_image: 'UG-ScienceBlockSF4.jpg', step: 17, navigations: [{step:21, translate: Directions.SouthEast, rotation: rotate },
            {step:15, translate: Directions.NorthEast1, rotation: rotate }]},
  {scene_image: 'UG-ScienceBlockTF0.jpg', step: 18, navigations: [{step:12, translate: Directions.NorthWest2, rotation: rotate },
            {step:19, translate: Directions.North, rotation: rotate }]},
  {scene_image: 'UG-ScienceBlockTF1.jpg', step: 19, navigations: [{step:18, translate: Directions.SouthWest2, rotation: rotate },
           {step:20, translate: Directions.NorthWest1, rotation: rotate }]},
  {scene_image: 'UG-ScienceBlockTF2.jpg', step: 20, navigations: [{step:19, translate: Directions.South, rotation: rotate },
            {step:21, translate: Directions.North, rotation: rotate }]},
  {scene_image: 'UG-ScienceBlockTF3.jpg', step: 21, navigations: [{step:17, translate: Directions.West, rotation: rotate },
            {step:20, translate: Directions.NorthEast1, rotation: rotate }]},
  {scene_image: 'UG-HostelBlock2.jpg', step: 22, navigations: [{step:23, translate: Directions.SouthEast, rotation: rotate },
            {step:5, translate: Directions.NorthWest2, rotation: rotate }]},
  {scene_image: 'UG-Chapel.jpg', step: 23, navigations: [{step:22, translate: Directions.South, rotation: rotate },
            {step:24, translate: Directions.NorthWest2, rotation: rotate }]},
  {scene_image: 'UG-ChapelPassage.jpg', step: 24, navigations: [{step:23, translate: Directions.SouthEast2, rotation: rotate },
           {step:27, translate: Directions.NorthEast1, rotation: rotate }]},
  {scene_image: 'UG-Ground.jpg', step: 25, navigations: [{step:32, translate: Directions.SouthEast2, rotation: rotate },
            {step:26, translate: Directions.West, rotation: rotate }]},
  {scene_image: 'UG-MagisBlock.jpg', step: 26, navigations: [{step:28, translate: Directions.East, rotation: rotate },
            {step:25, translate: Directions.SouthWest, rotation: rotate },
            {step:27, translate: Directions.NorthWest1, rotation: rotate }]},
  {scene_image: 'UG-Quadrangle2.jpg', step: 27, navigations: [{step:6, translate: Directions.North, rotation: rotate },
             {step:24, translate: Directions.SouthEast, rotation: rotate },
             {step:26, translate: Directions.SouthEast1, rotation: rotate },
             {step:25, translate: Directions.SouthWest, rotation: rotate }]},
  {scene_image: 'UG-MagisBlockSF.jpg', step: 28, navigations: [{step:29, translate: Directions.NorthEast, rotation: rotate },
           {step:26, translate: Directions.NorthWest1, rotation: rotate },
           {step:30, translate: Directions.NorthWest2, rotation: rotate }]},
  {scene_image: 'UG-MagisBlockLabs.jpg', step: 29, navigations: [{step:28, translate: Directions.East, rotation: rotate }]},
  {scene_image: 'UG-MagisBlockTF.jpg', step: 30, navigations: [{step:28, translate: Directions.NorthEast, rotation: rotate },
           {step:31, translate: Directions.SouthEast, rotation: rotate }]},
  {scene_image: 'UG-Canteen.jpg', step: 31, navigations: [{step:30, translate: Directions.NorthEast1, rotation: rotate }]},
  {scene_image: 'UG-BackGate.jpg', step: 32, navigations: [{step:33, translate: Directions.SouthEast1, rotation: rotate },
    {step:25, translate: Directions.SouthWest2, rotation: rotate }]},
  {scene_image: 'UG-SmallCanteen.jpg', step: 33, navigations: [{step:32, translate: Directions.SouthWest, rotation: rotate },
     {step:35, translate: Directions.NorthEast, rotation: rotate },
     {step:34, translate: Directions.East, rotation: rotate },
     {step:40, translate: Directions.NorthWest1, rotation: rotate },
     {step:25, translate: Directions.SouthEast1, rotation: rotate }]},
  {scene_image: 'UG-ArrupeBlock.jpg', step: 34, navigations: [{step:35, translate: Directions.NorthWest1, rotation: rotate },
     {step:36, translate: Directions.East, rotation: rotate },
     {step:33, translate: Directions.NorthWest2, rotation: rotate }]},
  {scene_image: 'UG-ArrupeBlockGF.jpg', step: 35, navigations: [{step:34, translate: Directions.North, rotation: rotate },
    {step:41, translate: Directions.South, rotation: rotate },
    {step:39, translate: Directions.SouthEast1, rotation: rotate },
      {step:33, translate: Directions.East, rotation: rotate }]},
  {scene_image: 'UG-Library.jpg', step: 36, navigations: [{step:34, translate: Directions.West, rotation: rotate },
    {step:37, translate: Directions.SouthEast, rotation: rotate }]},
  {scene_image: 'UG-MainGate.jpg', step: 37, navigations: [  {step:36, translate: Directions.NorthEast1, rotation: rotate },
    {step:38, translate: Directions.SouthWest2, rotation: rotate }]},
  {scene_image: 'UG-Stationary.jpg', step: 38, navigations: [{step:2, translate: Directions.NorthWest1, rotation: rotate },
    {step:37, translate: Directions.SouthEast1, rotation: rotate }]},
  {scene_image: 'UG-ABlockFF1.jpg', step: 39, navigations: [  {step:35, translate: Directions.East, rotation: rotate },
    {step:40, translate: Directions.SouthWest1, rotation: rotate },
      {step:43, translate: Directions.SouthEast, rotation: rotate }]},
  {scene_image: 'UG-ABlockFF2.jpg', step: 40, navigations: [  {step:39, translate: Directions.North, rotation: rotate },
        {step:45, translate: Directions.East, rotation: rotate }]},
  {scene_image: 'UG-ABlockGF1.jpg', step: 41, navigations: [  {step:42, translate: Directions.NorthEast1, rotation: rotate },
          {step:35, translate: Directions.South, rotation: rotate }]},
  {scene_image: 'UG-ABlockGF2.jpg', step:42, navigations: [ {step:33, translate: Directions.North, rotation: rotate },
    {step:41, translate: Directions.SouthWest2, rotation: rotate }]},
  {scene_image: 'UG-ABlockSF0.jpg', step: 43, navigations: [{step:44, translate: Directions.North, rotation: rotate },
              {step:39, translate: Directions.West, rotation: rotate }]},
  {scene_image: 'UG-ABlockSF1.jpg', step: 44, navigations: [ {step:45, translate: Directions.East, rotation: rotate },
    {step:43, translate: Directions.North, rotation: rotate },
    {step:46, translate: Directions.SouthEast1, rotation: rotate }]},
  {scene_image: 'UG-ABlockSF2.jpg', step: 45, navigations: [  {step:44, translate: Directions.NorthWest, rotation: rotate },
            {step:47, translate: Directions.NorthEast, rotation: rotate }]},
  {scene_image: 'UG-ABlockTF1.jpg', step: 46, navigations: [  {step:47, translate: Directions.SouthEast2, rotation: rotate },
    {step:44, translate: Directions.SouthWest1, rotation: rotate },
              {step:48, translate: Directions.SouthEast1, rotation: rotate }]},
  {scene_image: 'UG-ABlockTF2.jpg', step: 47, navigations: [  {step:45, translate: Directions.North, rotation: rotate },
    {step:49, translate: Directions.NorthWest1, rotation: rotate },
                {step:46, translate: Directions.West, rotation: rotate }]},
  {scene_image: 'UG-ABlockFoF1.jpg', step: 48, navigations: [  {step:46, translate: Directions.NorthWest, rotation: rotate },
                  {step:49, translate: Directions.SouthEast1, rotation: rotate }]},
  {scene_image: 'UG-ABlockFoF2.jpg', step:49 , navigations: [ {step:47, translate: Directions.NorthEast1, rotation: rotate },
    {step:48, translate: Directions.West, rotation: rotate }]}],
      current_scene:{},
      animationWidth: DEFAULT_ANIMATION_BUTTON_SIZE,
      animationRadius: DEFAULT_ANIMATION_BUTTON_RADIUS
      };
      this.onNavigationClick = this.onNavigationClick.bind(this);
      this.onMainWindowMessage = this.onMainWindowMessage.bind(this);
      this.animatePointer = this.animatePointer.bind(this);
      this.sceneOnLoad = this.sceneOnLoad.bind(this);
      this.sceneOnLoadEnd = this.sceneOnLoadEnd.bind(this);
  }

  componentWillMount(){
    window.addEventListener('message', this.onMainWindowMessage);
    this.setState({current_scene: this.state.scenes[0]})
  }

  componentWillUnmount(){
    if (this.frameHandle) {
       cancelAnimationFrame(this.frameHandle);
       this.frameHandle = null;
      }
  }

  componentDidMount(){
    this.animatePointer();
  }

  onMainWindowMessage(e){
      switch (e.data.type) {
        case 'newCoordinates':
          var scene_navigation = this.state.current_scene.navigations[0];
          this.state.current_scene.navigations[0]['translate'] = [e.data.coordinates.x,e.data.coordinates.y,e.data.coordinates.z]
          this.forceUpdate();
        break;
        default:
        return;
      }
  }

  onPanoInput(e){
    // if (e.nativeEvent.inputEvent.eventType === 'keydown'){
    //   this.rotatePointer(e.nativeEvent.inputEvent)
    // }
  }

  onNavigationClick(item,e){
    if(e.nativeEvent.inputEvent.eventType === "mousedown" && e.nativeEvent.inputEvent.button === 0){
      cancelAnimationFrame(this.frameHandle);
      var new_scene = this.state.scenes.find(i => i['step'] === item.step);
      this.setState({current_scene: new_scene});
      postMessage({ type: "sceneChanged"})
      this.state.animationWidth = DEFAULT_ANIMATION_BUTTON_SIZE;
      this.state.animationRadius = DEFAULT_ANIMATION_BUTTON_RADIUS;
      this.animatePointer();
    }
  }

  animatePointer(){
    var delta = this.state.animationWidth + 0.002;
    var radius = this.state.animationRadius + 10;
    if(delta >= 0.13){
      delta = DEFAULT_ANIMATION_BUTTON_SIZE;
      radius = DEFAULT_ANIMATION_BUTTON_RADIUS;
    }
    this.setState({animationWidth: delta, animationRadius: radius})
    this.frameHandle = requestAnimationFrame(this.animatePointer);
  }

  sceneOnLoad(){
    postMessage({ type: "sceneLoadStart"})
  }

  sceneOnLoadEnd(){
    postMessage({ type: "sceneLoadEnd"})
  }

  render() {
    var that = this;
    return (
      <View>
        <Pano source={asset(this.state.current_scene['scene_image'])} onInput={this.onPanoInput.bind(this)}
          onLoad={this.sceneOnLoad} onLoadEnd={this.sceneOnLoadEnd}
          style={{ transform: [{translate: [0, 0, 0]}] }}/>
        {this.state.current_scene['navigations'].map(function(item,i){
              return  <Mesh  key={i}
                            style={{
                                layoutOrigin: [0.5, 0.5],
                                transform: [{translate: item['translate']},
                                            {rotateX: item['rotation'][0]},
                                            {rotateY: item['rotation'][1]},
                                            {rotateZ: item['rotation'][2]}]
                            }}
                      onInput={ e => that.onNavigationClick(item,e)}>
                              <VrButton
                                     style={{ width: 0.15,
                                            height:0.15,
                                            borderRadius: 50,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderStyle: 'solid',
                                            borderColor: '#FFFFFF80',
                                            borderWidth: 0.01
                                     }}>
                                     <VrButton
                                            style={{ width: that.state.animationWidth,
                                                   height:that.state.animationWidth,
                                                   borderRadius: that.state.animationRadius,
                                                   backgroundColor: '#FFFFFFD9'
                                            }}>
                                     </VrButton>
                              </VrButton>
                      </Mesh>
          })}
      </View>
    );
  }
};

AppRegistry.registerComponent('CampusTour', () => CampusTour);
