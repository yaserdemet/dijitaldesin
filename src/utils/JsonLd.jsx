// Verilen schema.org objesini/dizisini <script type="application/ld+json"> olarak render eder
const JsonLd = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export default JsonLd;
