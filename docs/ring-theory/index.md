---
sidebar_position: 0
---

# 环论

```mermaid
graph TD
    R[环<br/>Ring]

    %% 环的分类（特殊性质）
    R -->|交换、含幺、无零因子| ID[整环<br/>Integral Domain]
    R -->|每个非零元可逆| Div[除环<br/>Division Ring]
    ID -->|是交换的除环| Field[域<br/>Field]
    Div -->|是整环且交换| Field

    %% 子结构
    R -->|包含| Sub[子环<br/>Subring]

    %% 同态与理想
    R -->|保持运算的映射| Hom[同态<br/>Homomorphism]
    Hom -->|核 Ker| Ideal[理想<br/>Ideal]
    Hom -->|像 Im| Sub

    %% 理想的特殊类型
    Ideal -->|单个元素生成| Prin[主理想<br/>Principal Ideal]
    Ideal -->|满足 ab∈P ⇒ a∈P 或 b∈P| Prime[素理想<br/>Prime Ideal]
    Ideal -->|最大的非平凡真理想| Max[极大理想<br/>Maximal Ideal]

    %% 商环的构造
    Ideal -->|模掉得到| QR[商环<br/>Quotient Ring]

    %% 素理想与极大理想的性质（标准定理）
    Prime -->|商环为| ID
    Max -->|商环为| Field

    %% 特征与素域
    R -->|整数环 Z 的映射核| Char[特征<br/>Characteristic]
    Char -->|若为域，其最小子域| PrimeField[素域<br/>Prime Field]
    PrimeField -->|同构于| Q_Fp[有理数域 Q 或<br/>有限域 F_p]

    %% 多项式环与分式域
    R -->|形式添加变量| Poly[多项式环<br/>Polynomial Ring]
    ID --->|构造分式形式| Frac[分式域<br/>Field of Fractions<br/>（整环的商域）]
```

## 章节导航

### [一、环的基本概念](./basic-concepts/)

从环的公理化定义出发，介绍零因子、可逆元、整环和域等核心概念，建立环的分类体系。

- [环的定义与基本性质](./basic-concepts/ring-definition)
- [整环](./basic-concepts/integral-domain)
- [域](./basic-concepts/field)

### [二、子环与理想](./subring-ideal/)

理想是环论中最重要的子结构——它在环论中的地位类似正规子群在群论中的地位。包含子环、理想、主理想、素理想和极大理想。

- [子环](./subring-ideal/subring)
- [理想](./subring-ideal/ideal)
- [理想的类型：主理想、素理想、极大理想](./subring-ideal/ideal-types)

### [三、环同态与同构](./homomorphism/)

研究环之间保持两种运算的映射——环同态，以及同态基本定理和三大同构定理。

- [环同态](./homomorphism/homomorphism)
- [环同构](./homomorphism/isomorphism)
- [同态基本定理](./homomorphism/fundamental-theorem)

### [四、商环](./quotient-ring/)

由理想构造商环，是环论的核心构造方法。商环的性质与理想的类型（素理想 $\leftrightarrow$ 整环、极大理想 $\leftrightarrow$ 域）紧密相连。

### [五、特征与素域](./characteristic/)

环的特征描述了其加法群的结构。对域而言，特征为 $0$ 或素数，决定了域的最小子域（素域 $\cong \mathbb{Q}$ 或 $\mathbb{F}_p$）。

### [六、多项式环](./polynomial-ring/)

在环上形式添加变量得到的多项式环是最重要的环类之一。域上的多项式环是 PID，且可通过不可约多项式构造域的扩张。

### [七、分式域](./field-of-fractions/)

任意整环可嵌入一个最小的域——分式域。这是从整数构造有理数的推广，也是局部化在"所有非零元"处的特例。
```