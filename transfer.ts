import { Transaction, SystemProgram, Connection, Keypair, LAMPORTS_PER_SOL, sendAndConfirmTransaction, PublicKey } from "@solana/web3.js"
import wallet from "wallet.json"

// Import our dev wallet keypair from the wallet file

// Define  public key

//Create a Solana devnet connection

(async () => {
  try {
    // Get balance of dev wallet
    const balance = await connection.getBalance(from.publicKey)
    console.log(`Balance: ${balance}`)

    // Create a transaction to transfer

    // Sign transaction, broadcast, and confirm

    console.log(`Success! Check out your TX here: 
        https://explorer.solana.com/tx/${signature}?cluster=devnet`)
  } catch (e) {
    console.error(`Oops, something went wrong: ${e}`)
  }
})();
