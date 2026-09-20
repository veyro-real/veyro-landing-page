import type {Metadata} from 'next';
import './concept.css';

export const metadata: Metadata = {
  title: 'Veyro — concept',
  description: 'Solana memecoin recon in Telegram. It reads every launch and throws out almost all of them.',
  robots: {index: false, follow: false},
};

const BOT = 'https://t.me/theveyrobotbot';
const GITHUB = 'https://github.com/veyro-real';
// Set NEXT_PUBLIC_VEYRO_X once the handle exists; until then the link is omitted
// rather than pointed at a profile that may not be ours.
const X = process.env.NEXT_PUBLIC_VEYRO_X;

/** The actual RejectReason union from veyro-live/lib/types.ts. Not decoration. */
const REJECTIONS = [
  'MINT_AUTHORITY_LIVE', 'FREEZE_AUTHORITY_LIVE', 'INSIDER_CONCENTRATION',
  'CREATOR_SERIAL_LAUNCHER', 'CREATOR_PRIOR_RUG', 'BUNDLED_LAUNCH',
  'LP_NOT_LOCKED', 'LIQUIDITY_TOO_THIN', 'MARKET_CAP_OUT_OF_RANGE',
  'TOO_OLD', 'NO_SOCIAL_FOOTPRINT',
];

const TRUTHS = [
  ['Reads every launch',
   'Connected to the pump.fun firehose. A new mint is recorded within seconds, before anyone has decided whether it matters.'],
  ['Throws out almost all of them',
   'Eleven named disqualifiers, listed above. No vibes, no score you have to trust. If it rejects something it tells you which rule fired.'],
  ['Shows its working',
   'Every answer is what was measured: float concentration, authority status, liquidity, age. Never a prediction, because it cannot make one.'],
  ['Never trades without you',
   'A buy is a photo, the numbers, and a button. Nothing moves until you press it.'],
];

export default function Concept() {
  return (
    <div className="vc">
      <header className="vc-top">
        <span className="vc-mark"><b>V</b>EYRO</span>
        <nav className="vc-corner">
          {X ? <a href={X}>X</a> : null}
          <a href={GITHUB}>GitHub</a>
        </nav>
      </header>

      <main className="vc-main">
        <h1 className="vc-h1">
          <span className="base">I outsourced my gambling addiction to a bot.</span>
          <span className="alt" aria-hidden="true">The bot has worse ideas than you. Faster.</span>
        </h1>

        <p className="vc-lead">
          Solana memecoin recon in Telegram. It reads every pump.fun launch within
          seconds of the mint, <b>throws out almost all of them</b>, and shows you
          exactly what it measured on the few that are left.
        </p>

        <a className="vc-cta" href={BOT}>Open the bot <span aria-hidden="true">→</span></a>
        <p className="vc-handle">@theveyrobotbot</p>

        <section className="vc-ticker" aria-label="Reasons a launch gets rejected">
          <div className="vc-ticker-track">
            {[...REJECTIONS, ...REJECTIONS].map((r, i) => <span key={i}>{r}</span>)}
          </div>
        </section>

        <section className="vc-truths">
          {TRUTHS.map(([head, body], i) => (
            <article key={head}>
              <h2><span className="n">{String(i + 1).padStart(2, '0')}</span> {head}</h2>
              <p>{body}</p>
            </article>
          ))}
        </section>
      </main>

      <footer className="vc-foot">
        <span>Built in public.</span>
        <p className="vc-disclose">
          Custodial: the bot holds the private key to your trading wallet. If it is
          compromised, the funds in it are gone. Not financial advice, and nothing
          here predicts a price.
        </p>
        <span>
          {X ? <><a href={X}>X</a> · </> : null}
          <a href={GITHUB}>GitHub</a> · Veyro © 2026
        </span>
      </footer>
    </div>
  );
}
