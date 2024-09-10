import ArtworkContainer from '../../components/ArtworkContainer'
import styles from './styles.module.css'

export default function index() {
  return (
    <ArtworkContainer
      title='Terminal'
      attribution='Inspired by OSX Terminal and "Mr.Robot" TV series'
      creator='Marco Buontempo'
      categories={['one div']}
      ghSrc='/Terminal'
    >
      <div className={styles.artwork}>

        {'\n\n\n\n'}

        {'>        8888888888  .d8888b.    .d88888b.   8888888b.   8888888b.  \n'}
        {'>       888        d88P  Y88b  d88P" "Y88b  888   Y88b  888   Y88b \n'}
        {'>      888        888    888  888     888  888    888  888    888 \n'}
        {'>     8888888    888         888     888  888   d88P  888   d88P \n'}
        {'>    888        888         888     888  8888888P"   8888888P"  \n'}
        {'>   888        888    888  888     888  888 T88b    888        \n'}
        {'>  888        Y88b  d88P  Y88b. .d88P  888  T88b   888        \n'}
        {'> 8888888888  "Y8888P"    "Y88888P"   888   T88b  888        \n'}

        {'>\n'}
        {'>\n'}
        {'>\n'}
        {'> } ---  fsociety  --- {\n'}
        {'> } ---   is now   --- {\n'}
        {'> } --- intialised --- {\n'}
        {'>\n'}
        {'>\n'}
        {'>\n'}
        {'> elliot@ecorp-server:~$ ls -al\n'}
        {'> total 3\n'}
        {'> drwx------+ 1 ecorp staff 20480 Apr 18 11:35 .secrets\n'}
        {'> drwx------+ 1 ecorp staff 38174 Jun 19 13:06 passwords.dat\n'}
        {'> drwx------+ 1 ecorp staff 32866 Aug 21 08:53 usernames.dat\n'}
        {'>\n'}
        {'> elliot@ecorp-server:~$ fsociety.sh ./.secrets breach\n'}
        {'> breach in progress ..... %\n'}

      </div>
    </ArtworkContainer>
  )
}