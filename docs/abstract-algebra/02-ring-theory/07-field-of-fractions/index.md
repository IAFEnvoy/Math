---
sidebar_position: 1
---

# 分式域

分式域（Field of Fractions）是将整环"域化"的最经济方法——正如 $\mathbb{Q}$ 由 $\mathbb{Z}$ 构造而来，任意整环都可以嵌入一个域中。

```mermaid
graph LR
    ID[整环 R] -->|构造分式| Frac["分式域 Frac(R)"]
    Frac -->|包含| ID
    Frac -->|最经济| FracMin["最小的包含 R 的域"]
```

## 构造

设 $R$ 为整环。在集合 $R \times (R \setminus \{0\})$ 上定义等价关系：

$$(a, b) \sim (c, d) \iff ad = bc$$

将等价类 $\frac{a}{b}$（即 $(a, b)$ 所在的等价类）全体记为 $\operatorname{Frac}(R)$。定义加法和乘法：

$$\frac{a}{b} + \frac{c}{d} = \frac{ad + bc}{bd}, \qquad \frac{a}{b} \cdot \frac{c}{d} = \frac{ac}{bd}$$

则 $(\operatorname{Frac}(R), +, \cdot)$ 构成域，称为 $R$ 的**分式域**（Field of Fractions）或**商域**。

## 基本性质

1. **嵌入**：映射 $i: R \to \operatorname{Frac}(R)$，$i(r) = \frac{r}{1}$ 是单同态。因此可视为 $R \subseteq \operatorname{Frac}(R)$。
2. **最小性**：若 $F$ 是域且 $R \subseteq F$，则 $\operatorname{Frac}(R)$ 同构于 $F$ 中由 $R$ 生成的子域。
3. **泛性质**：任意单同态 $R \to F$（$F$ 为域）可唯一延拓为 $\operatorname{Frac}(R) \to F$。

## 经典例子

| 整环 | 分式域 | 说明 |
|---|---|---|
| $\mathbb{Z}$ | $\mathbb{Q}$ | 整数 → 有理数 |
| $F[x]$（$F$ 域） | $F(x)$ | 多项式 → 有理函数 |
| $\mathbb{Z}[i]$ | $\mathbb{Q}(i)$ | 高斯整数 → 高斯有理数 |
| $\mathbb{R}[x]$ | $\mathbb{R}(x)$ | 实系数有理函数域 |
| $\mathbb{Z}_p$（$p$ 素数） | $\mathbb{Z}_p$ 自身 | 已是域，分式域即自身 |

## 分式域与局部化

分式域是环的**局部化**（Localization）在"所有非零元"处的特例。局部化的更一般形式允许只对乘法子集 $S \subseteq R$ 做"分式化"：

$$S^{-1}R = \left\{ \frac{r}{s} \;\middle|\; r \in R, s \in S \right\}$$

- 当 $R$ 是整环且 $S = R \setminus \{0\}$ 时，$S^{-1}R = \operatorname{Frac}(R)$（分式域）
- 当 $S = R \setminus P$（$P$ 为素理想）时，$S^{-1}R$ 称为 $R$ 在 $P$ 处的**局部环**，记作 $R_P$

## 分式域在同构理论中的应用

1. **$\operatorname{Frac}(\mathbb{Z}[x]) = \mathbb{Q}(x)$**
2. **$\operatorname{Frac}(F[x, y]) = F(x, y)$**
3. 若 $R \cong S$ 为整环同构，则 $\operatorname{Frac}(R) \cong \operatorname{Frac}(S)$

分式域是构造域的基本手段，也是代数几何中研究有理函数域的基础。
