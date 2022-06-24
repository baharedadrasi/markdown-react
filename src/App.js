import React from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
  const [markdown, setMarkdown] = React.useState('# markdown preview');
  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => {
            setMarkdown(e.target.value);
          }}
        ></textarea>
        <article className="reslt">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
