import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'me.jrezanina.words',
  appName: 'Words',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
