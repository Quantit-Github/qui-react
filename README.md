# Quantit UI

Quantit UI는 회사 내의 기존 프로젝트와 앞으로 만들어질 여러 프로젝트에서 공유하여 사용할 수 있는 **공통 UI 컴포넌트** 라이브러리입니다.

## Needs

애플리케이션의 안정성과 프론트엔드 개발의 효율성을 위해서 일관성 있는 디자인 규칙이 필요합니다.
이를 위한 **디자인 시스템** 구축과 **공통 UI 컴포넌트** 구현은 프론트엔드 개발 시 반드시 수반 되어야 하는 작업입니다.

- **디자인 시스템**
  : "폰트 색상", "폰트 크기", "줄 간격" 등 애플리케이션 전반에 걸쳐 각 요소별로 일관성 있는 디자인 제공을 위한 스타일 규칙입니다.

- **공통 UI 컴포넌트**
  : "버튼"처럼 자주 사용하는 UI는 따로 묶어서 공통의 UI로 활용하는데 이를 **공통 UI 컴포넌트**라고 부릅니다.
  **디자인시스템**을 기반으로 작성되고, 애플리케이션 내의 UI 중 "원자" 단위로 취급되어 "분자" 및 "조직" 단위의 UI를 만들기 위한 기초적인 요소가 됩니다.

## Motivation

동기는 다음과 같습니다.

#### 1. 시간 단축 : 미리 설정된 **디자인 시스템**과 **공통 UI 컴포넌트**를 사용하여 작업 속도를 높입니다.

**디자인 시스템** 규칙이 상세할수록 작업의 양은 늘어납니다.
이를 미리 정해두어 제공할 수 있다면 작업의 속도를 높일 수 있습니다.

#### 2. 반복 작업 제거 : 불필요한 반복 세팅 작업을 줄입니다.

**디자인 시스템**과 **기본 UI 컴포넌트**를 위한 세팅은 프로젝트마다 조금씩 다를 수 있지만 대부분 비슷한 과정을 거첩니다.
이런 반복적인 작업을 제거하면 작업의 속도를 더욱 높일 수 있습니다.

#### 3. 일관적인 UI 제공 : 퀀팃만의 UI를 일관성 있게 제공할 수 있습니다.

퀀팃만의 코어 UI 및 디자인 요소를 프로젝트에 쉽게 적용할 수 있게 됩니다.

> 프로젝트마다 적용할 **디자인 시스템**과 **공통 UI**가 조금씩 다를 수 있습니다.
> 이는 오버라이딩이 가능한 구조로 설계하여 해결할 수 있습니다.

#### 4. 웹 접근성 일괄 적용 : 웹 표준 준수를 위한 웹 접근성 요소(Aria)를 **공통 UI 컴포넌트**에 알괄 적용하여 제공합니다.(Web Only)

웹 접근성 제공은 웹 표준 준수를 위한 중요한 항목 중 하나입니다.
웹 표준의 가이드를 제시하는 W3C에선 웹 접근성 제공을 위해 HTML Tag에 Aria 등의 특성을 적용하길 권장합니다.
다만, Tag마다 적용되는 규칙이 다르고 그 양이 방대하기 때문에 매 프로젝트마다 해당 작업을 수행하는 것은 다소 비효율적입니다.
공통 UI에 Aria 등의 접근성을 위한 요소를 제공한다면, 해당 작업에 관한 속도 증진은 물론 접근성 요소를 일괄적으로 제공할 수 있습니다.

## What is Serving

해당 라이브러리에서 제공할 요소는 다음과 같습니다.

- _테마 시스템 컴포넌트_: **디자인 시스템**이 적용된 UI 테마 시스템 컴포넌트
- _공통 UI 컴포넌트_(Button, Input 등): *테마 시스템 컴포넌트*를 기반으로한 UI 컴포넌트. 적용성을 위해 최소한의 스타일 적용.
- _Aria 속성_: 웹표준을 만족한는 웹 접근성 요소(Aria) 삽입. **공통 UI 컴포넌트**에 적용하여 제공.
