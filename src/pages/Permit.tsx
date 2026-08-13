import { borderNotes, permitFacts, permitSteps } from "../data";

export function PermitPage() {
  return (
    <article>
      <h1>入台证</h1>
      <p className="lede">
        旅居荷兰的大陆居民走「国外来台观光」。线上申请，再去海牙当面面談缴费。
      </p>
      <p>
        <a href="https://www.roc-taiwan.org/nl/post/24535.html" target="_blank" rel="noreferrer">
          驻荷兰台北代表处申请页
        </a>
      </p>

      <dl className="facts-list">
        {permitFacts.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>

      <h2>流程</h2>
      <ol>
        {permitSteps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>

      <h2>资格（工作居留通常走第 3 条）</h2>
      <ol>
        <li>在国外留学</li>
        <li>取得当地永久居留权</li>
        <li>旅居国外一年以上且有工作证明</li>
        <li>取得当地依亲长期居留且有财力证明</li>
        <li>前四款的随行配偶或二亲等内血亲</li>
      </ol>
      <p>单次证从核发日起 3 个月内要入境。9/17 之后尽早约，不要早于窗口。面談现场不收补交的新居留证。</p>

      <h2>出关入关</h2>
      <p>这趟是荷兰出、台湾进、再从桃园回深圳。证件只带中国护照 + 荷兰居留 + 入台证，不要混台胞证。</p>
      {borderNotes.map((item) => (
        <section key={item.title} className="block">
          <h3>{item.title}</h3>
          <p>{item.detail}</p>
        </section>
      ))}
    </article>
  );
}
