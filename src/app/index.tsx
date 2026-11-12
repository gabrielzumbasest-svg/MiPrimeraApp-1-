import * as Device from 'expo-device';
import { Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

function getDevMenuHint() {
  if (Platform.OS === 'web') {
    return <ThemedText type="small">use browser devtools</ThemedText>;
  }
  if (Device.isDevice) {
    return (
      <ThemedText type="small">
        shake device or press <ThemedText type="code">m</ThemedText> in terminal
      </ThemedText>
    );
  }
  const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
  return (
    <ThemedText type="small">
      press <ThemedText type="code">{shortcut}</ThemedText>
    </ThemedText>
  );
}

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <AnimatedIcon />
          <ThemedText type="title" style={styles.title}>
            Welcome GABRIEL ZUMBA
          </ThemedText>
        </ThemedView>

        <ThemedText type="code" style={styles.code}>
           TECNICO SALESIANO
        </ThemedText>

        <ThemedView type="backgroundElement" style={styles.stepContainer}>
          <HintRow
            title="2E1"
            hint={<ThemedText type="code">src/app/index.tsx</ThemedText>}
          />
          <HintRow title="MOVILES" hint={getDevMenuHint()} />
          <h2>BUENAS PROFE</h2>
          Para entender la historia de Five Nights at Freddy's hay que olvidarse que estos son juegos y quiero que tomen realmente a esta saga como lo que es: ciencia ficción y terror.
La historia comienza con la sociedad entre Henry Emily y William Afton, quienes abrieron Fredbear's Family Dinner entre 1980 y 1982. Mientras Henry era un talentoso mecánico con una hija llamada Charlotte, William era un socio adinerado con tres hijos: Michael, Elizabeth y el hijo menor (Crying Child).
Detrás de la fachada familiar, la tragedia desata la trama: William asesina a Charlotte, cuya alma pasa a poseer a Puppet. En 1983 ocurre la "Mordida del 83", hiriendo de gravedad al Crying Child por culpa de su hermano Michael. Paralelamente, William abre Circus Baby's Pizza World con animatrónicos trampa, provocando la muerte de su propia hija Elizabeth a manos de Circus Baby.
A partir de estos eventos iniciales, la cronología se expande con sucesos de posesión, remanente, múltiples sucursales de Freddy Fazbear's Pizza y la cruzada de Michael Afton para detener los crímenes de su padre.
          <HintRow
            title="INFORMATICA"
          
            hint={<ThemedText type="code">npm run reset-project</ThemedText>}
          />
        </ThemedView>

        {Platform.OS === 'web' && <WebBadge />}
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  title: {
    textAlign: 'center',
  },
  code: {
    textTransform: 'uppercase',
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
});
