import { useWallet } from '../services/providers/MintbaseWalletContext'
import { MbButton, MbText } from 'mintbase-ui'
import WalletConnectButton from './WalletConnectButton'
import groupPic from '../assets/group.png'

import styles from './Hero.module.css'
import Image from 'next/image'

const Hero = () => {
  const { wallet, isConnected, details } = useWallet()
  return (
        <div className={styles.hero}>
        <div className={styles.text}>
          <h1>
            Empowering Citizen Scientists
          </h1>
          <h2>
            Research, discover and get rewarded for your contributions.
          </h2>
          </div>
          <h2 className={styles.explore}>Explore projects</h2>
          <Image
      src={groupPic}
      alt="Picture of the author"
      layout='fill'
      objectFit='cover'
      objectPosition="center"
      className={styles.image}
    />
        </div>
  )
}

export default Hero
