---
sidebar_position: 0
---

# 域论

域（Field）是环论中最"完美"的结构——每个非零元都有乘法逆元。域论以域的基本性质和扩张理论为核心，连接代数方程、Galois 理论和有限域。

```mermaid
graph TB
    Field[域 Field] -->|基本性质| Basic[域的公理<br/>非零元构成乘法群]
    Field -->|分类| Class[有限域 vs 无限域<br/>特征 0 vs 特征 p]
    Field -->|扩张| Ext[域的扩张<br/>F ⊆ E]
    Ext -->|有限扩张| FiniteExt[有限扩张<br/>次数 E:F]
    Ext -->|代数元| AlgExt[代数元 vs 超越元]
    Ext -->|单扩张| SimpleExt["单扩张 F(α)"]
    FiniteExt -->|构造| Constr["由不可约多项式构造<br/>E ≅ F[x]/(f(x))"]
    Class -->|有限域| FiniteF["F_p 和 F_{p^n}"]
    Class -->|代数闭域| AlgClose["C 是代数闭域"]
```

## 章节导航

### 一、域的基本概念与例子

域的定义、子域与扩域、素域、特征。常见域的例子：$\mathbb{Q}, \mathbb{R}, \mathbb{C}, \mathbb{F}_p$。

- [域的定义与基本性质](./field-basics/definition-and-examples)
- [素域与特征](./field-basics/prime-field-characteristic)

### 二、域的扩张

域的代数扩张与超越扩张。有限扩张的次数公式、单扩张的构造以及由不可约多项式 $f(x)$ 构造扩域 $F[x]/(f(x))$（核心考点）。

- [代数扩张](./field-extensions/algebraic-extensions)
- [单扩张与构造扩域](./field-extensions/simple-extensions)

### 三、有限域

有限域 $\mathbb{F}_q$（$q = p^n$）的结构。存在性与唯一性，Galois 自同构（Frobenius 映射）。

- [有限域的结构](./finite-fields/structure)
