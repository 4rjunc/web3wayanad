import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js"
import wallet from "./wallet.json"

// We're going to import our keypair from the wallet file

//Create a Solana devnet connection to claim 2 devnet SOL tokens

(async () => {
  try {
    // request for airdrop
    console.log(`Success! Check out your TX here: 
    https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
  } catch (e) {
    console.error(`Oops, something went wrong: ${e}`)
  }
})();
