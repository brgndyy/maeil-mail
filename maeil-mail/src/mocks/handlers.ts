import API_ROUTES from '@/apis/routes';
import { http, HttpResponse } from 'msw';
import BASE_URL from '../apis/baseUrl';

export const handlers = [
  http.post(`${BASE_URL}${API_ROUTES.post_subscribe}`, () => {
    return HttpResponse.json(null, {
      status: 200,
    });
  }),
  http.post(`${BASE_URL}${API_ROUTES.post_new_question}`, () => {
    return HttpResponse.json(null, {
      status: 200,
    });
  }),
  http.get(`${BASE_URL}${API_ROUTES.question}/:id`, () => {
    return HttpResponse.json({
      id: 1,
      title: '자바스크립트의 실행컨텍스트와 클로저에 대해서 설명해주세요',
      content: `## JavaScript의 실행 컨텍스트와 클로저에 대해 설명해주세요\n\n자바스크립트에서 **실행 컨텍스트(Execution Context)**는 코드가 실행될 환경을 정의하는 추상적인 개념입니다. 실행 컨텍스트는 변수, 객체, 함수 등의 정보를 관리하며, 실행되는 동안 스코프 체인, this 값, 변수 객체 등을 설정합니다.\n\n### 실행 컨텍스트의 구성 요소\n\n1. **변수 객체(Variable Object)**: 실행 컨텍스트 내에서 사용되는 변수, 함수 선언을 저장합니다.\n2. **스코프 체인(Scope Chain)**: 현재 컨텍스트의 변수 객체와 상위 컨텍스트의 변수 객체를 연결하는 체인입니다.\n3. **this**: 현재 실행되는 코드가 속한 객체를 참조합니다.\n\n#### 코드 예시\n\n\`\`\`javascript\nfunction outer() {\n    var outerVar = 'I am outside!';\n    function inner() {\n        var innerVar = 'I am inside!';\n        console.log(outerVar); // 'I am outside!'\n    }\n    inner();\n}\nouter();\n\`\`\`\n\n위 코드에서 \`outer\` 함수는 \`outerVar\`라는 변수를 가지고 있으며, 내부에 정의된 \`inner\` 함수는 \`outerVar\`에 접근할 수 있습니다. 이와 같이, 내부 함수가 외부 함수의 변수에 접근할 수 있는 현상을 **클로저(Closure)**라고 합니다.\n\n### 클로저(Closure)\n\n클로저는 함수가 자신이 생성될 때의 환경(렉시컬 환경, Lexical Environment)을 기억하고, 생성 이후에도 이 환경에 접근할 수 있는 기능을 의미합니다. 클로저는 함수와 함수가 선언된 어휘적 환경의 조합입니다.\n\n#### 클로저의 예시\n\n\`\`\`javascript\nfunction makeCounter() {\n    let count = 0;\n    return function() {\n        count++;\n        return count;\n    };\n}\nconst counter = makeCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2\nconsole.log(counter()); // 3\n\`\`\`\n\n위 코드에서 \`makeCounter\` 함수는 \`count\`라는 변수를 선언하고, 내부에 익명 함수를 반환합니다. 반환된 익명 함수는 \`count\` 변수에 접근할 수 있는 클로저를 형성합니다.\n\n### 마크다운에서 다양한 요소들\n\n마크다운에서는 여러 요소들을 사용하여 다양한 서식을 지정할 수 있습니다:\n\n- **굵은 텍스트**: \`**text**\` 또는 \`__text__\`\n- *기울임 텍스트*: \`*text*\` 또는 \`_text_\`\n- **_굵고 기울임 텍스트_**: \`***text***\` 또는 \`___text___\`\n- ~~취소선 텍스트~~: \`~~text~~\`\n\n#### 블록 인용\n\n> 이 부분은 블록 인용입니다.\n> 여러 줄의 텍스트도 가능합니다.\n\n#### 목록들\n\n1. 첫 번째 항목\n2. 두 번째 항목\n3. 세 번째 항목\n\n- 비순서 목록의 첫 번째 항목\n  - 들여쓰기를 통한 하위 항목\n- 비순서 목록의 두 번째 항목\n\n#### 링크와 이미지\n\n[OpenAI](https://www.openai.com)는 인공지능 연구소입니다.\n\n![OpenAI 로고](https://via.placeholder.com/150)\n\n### 표 예시\n\n| 제목 1 | 제목 2 | 제목 3 |\n| ------ | ------ | ------ |\n| 내용 1 | 내용 2 | 내용 3 |\n| 내용 4 | 내용 5 | 내용 6 |\n\n마크다운을 사용하면 이렇게 다양한 요소들을 쉽게 표현할 수 있습니다!`,

      category: 'frontend',
    });
  }),
];
