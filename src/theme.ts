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
      fontWeight: 'bold';
      fontStyle: 'italic' | 'normal' | undefined;
      textAlign: 'center';
    };
    light: {
      fontFamily: string;
      fontSize: number;
      fontStyle: 'italic' | 'normal' | undefined;
      textAlign: 'center';
    };
    regular: {
      fontFamily: string;
      fontSize: number;
      fontWeight: 'normal';
      fontStyle: 'italic' | 'normal' | undefined;
      textAlign: 'center';
    };
    bold: {
      fontFamily: string;
      fontSize: number;
      fontWeight: 'bold';
      fontStyle: 'italic' | 'normal' | undefined;
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
    SHADOW: '#000000',
    SUCCESS: '#22bb33',
    INFO: '#5bc0de',
    WHITE: '#FFFFFF',
  },
  fonts: {
    title: {
      fontFamily: 'RobotoMono-ThinItalic',
      fontSize: 30,
      fontWeight: 'bold',
      fontStyle: 'italic',
      textAlign: 'center',
    },
    light: {
      fontFamily: 'Kalam-Light',
      fontSize: 32,
      fontStyle: 'italic',
      textAlign: 'center',
    },
    regular: {
      fontFamily: 'Kalam-Regular',
      fontSize: 25,
      fontWeight: 'normal',
      fontStyle: 'italic',
      textAlign: 'center',
    },
    bold: {
      fontFamily: 'Kalam-Bold',
      fontSize: 42,
      fontWeight: 'bold',
      fontStyle: 'italic',
      textAlign: 'center',
    },
  },
};
