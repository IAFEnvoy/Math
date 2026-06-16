---
sidebar_position: 1
---

# 商环

商环（Quotient Ring / Factor Ring）是模掉一个理想后得到的环。它是群商群在环论中的对应物——但以理想代替正规子群。

## 来源

从 Mermaid 图中可以看到，理想是构造商环的基础：

```mermaid
graph LR
    Ideal[理想 I] -->|模掉得到| QR[商环 R / I]
```

## 定义

设 $I \trianglelefteq R$ 为 $R$ 的理想。在加法商群 $R/I = \{r + I \mid r \in R\}$ 上定义乘法：

$$(a + I)(b + I) = ab + I$$

则 $(R/I, +, \cdot)$ 构成环，称为 $R$ 对 $I$ 的**商环**（Quotient Ring）。

## 商环的良定义性

商环乘法的良定义依赖于 $I$ 是**双边理想**：若 $I$ 仅仅是子环（而非理想），乘法不一定良定义。

> 验证：设 $a + I = a' + I$ 且 $b + I = b' + I$，即 $a' = a + i_1$，$b' = b + i_2$（$i_1, i_2 \in I$）。则
> $$a'b' = (a + i_1)(b + i_2) = ab + i_1b + ai_2 + i_1i_2$$
> 由 $I$ 的吸收性，$i_1b, ai_2 \in I$，故 $a'b' + I = ab + I$。

## 商环的基本性质

1. **零元**：$0_{R/I} = 0_R + I = I$
2. **幺元**（若 $R$ 含幺）：$1_{R/I} = 1_R + I$
3. **自然投影** $\pi: R \to R/I$，$r \mapsto r + I$ 是满环同态，核为 $I$
4. **$R/I$ 是整环 $\iff$ $I$ 是素理想**
5. **$R/I$ 是域 $\iff$ $I$ 是极大理想**（$R$ 交换含幺）

## 商环的例子

| 商环 | 原环 | 理想 | 说明 |
|---|---|---|---|
| $\mathbb{Z}_n = \mathbb{Z}/n\mathbb{Z}$ | $\mathbb{Z}$ | $n\mathbb{Z}$ | 模 $n$ 剩余类环 |
| $\mathbb{Z}_p$（$p$ 素数） | $\mathbb{Z}$ | $p\mathbb{Z}$ | 有限域 |
| $\mathbb{R}[x]/(x^2 + 1)$ | $\mathbb{R}[x]$ | $(x^2 + 1)$ | $\cong \mathbb{C}$ |
| $\mathbb{Q}[x]/(x^2 - 2)$ | $\mathbb{Q}[x]$ | $(x^2 - 2)$ | $\cong \mathbb{Q}(\sqrt{2})$ |
| $F[x]/(f(x))$ | $F[x]$ | $(f(x))$ | $f$ 的割裂域（当 $f$ 不可约时是域） |

## 商环与扩张

商环是构造域的扩张的重要方法。例如：

- $\mathbb{Q}(\sqrt{2}) \cong \mathbb{Q}[x]/(x^2 - 2)$
- $\mathbb{C} \cong \mathbb{R}[x]/(x^2 + 1)$
- 任意有限域 $\mathbb{F}_{p^n}$ 可表示为 $\mathbb{F}_p[x]/(f(x))$，其中 $f$ 是 $\mathbb{F}_p$ 上的 $n$ 次不可约多项式

这种构造是 Galois 理论、代数数论、代数几何的基础。
