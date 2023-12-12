import logo from './assets/logo.svg';
import './App.scss';
import GameList from './components/GameList/GameList';
import Footer from './components/Footer/Footer';
import { Component } from 'solid-js';

const App: Component = () => {
  // const [greetMsg, setGreetMsg] = createSignal('');
  // const [name, setName] = createSignal('');

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   setGreetMsg(await invoke('greet', { name: name() }));
  // }

  return (
    <div class="app">
      <img src={logo} class="logo" alt="DIMPI logo" />
      <h1>DIMPI</h1>
      <button>QR</button>
      <GameList />
      <Footer />
    </div>
  );
};

export default App;
