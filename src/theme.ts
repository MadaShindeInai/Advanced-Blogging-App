type ThemeTypes = {
  colors: {
    DANGER: string;
    MAIN: string;
    TEXT: string;
    BORDER: string;
    SHADOW: string;
    SUCCESS: string;
    INFO: string;
    WHITE: string;
  };
  fonts: {
    title: {
      fontFamily: string;
      fontSize: number;
      textAlign: 'center';
    };
    light: {
      fontFamily: string;
      fontSize: number;
      textAlign: 'center';
    };
    regular: {
      fontFamily: string;
      fontSize: number;
      textAlign: 'center';
    };
    bold: {
      fontFamily: string;
      fontSize: number;
      textAlign: 'center';
    };
  };
};

export const THEME: ThemeTypes = {
  colors: {
    DANGER: '#bb2124',
    MAIN: '#f4511e',
    TEXT: '#3D5ABC',
    BORDER: '#87ceeb',
    SHADOW: 'rgba(0,0,0,0.7)',
    SUCCESS: '#22bb33',
    INFO: '#5bc0de',
    WHITE: '#FFFFFF',
  },
  fonts: {
    title: {
      fontFamily: 'RobotoMono-ThinItalic',
      fontSize: 30,
      textAlign: 'center',
    },
    light: {
      fontFamily: 'Kalam-Light',
      fontSize: 32,
      textAlign: 'center',
    },
    regular: {
      fontFamily: 'Kalam-Regular',
      fontSize: 25,
      textAlign: 'center',
    },
    bold: {
      fontFamily: 'Kalam-Bold',
      fontSize: 42,
      textAlign: 'center',
    },
  },
};
