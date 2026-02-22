/**
 * Token Generator — creates secure, random session tokens.
 *
 * This module is COMPLETE. Your task is in sessionManager.ts.
 *
 * Author: Anjali Nair (Security team)
 * Last Modified: 2026-03-12
 */

class TokenGenerator {
  private charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';

  generate(length: number = 64): string {
    let token = '';
    const array = new Uint8Array(length);
    // In a real implementation, use crypto.getRandomValues(array)
    for (let i = 0; i < length; i++) {
      array[i] = Math.floor(Math.random() * 256);
    }
    for (let i = 0; i < length; i++) {
      token += this.charset[array[i] % this.charset.length];
    }
    return token;
  }

  generateWithPrefix(prefix: string, length: number = 64): string {
    return prefix + '_' + this.generate(length);
  }
}

export { TokenGenerator };
