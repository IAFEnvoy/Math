---
sidebar_position: 2
---

# 单扩张与构造扩域

## 单扩张的定义

在 $E/F$ 的扩张中，包含 $F$ 和元素 $\alpha \in E$ 的最小子域记作 $F(\alpha)$，称为 $F$ 上由 $\alpha$ 生成的**单扩张**。

### 单扩张的构造

$$\begin{aligned}
F(\alpha) &= \left\{ \frac{f(\alpha)}{g(\alpha)} \;\middle|\; f, g \in F[x], \; g(\alpha) \neq 0 \right\} \\[6pt]
F[\alpha] &= \{ f(\alpha) \mid f \in F[x] \}
\end{aligned}$$

$F[\alpha]$ 是 $F(\alpha)$ 的子环（多项式环在 $\alpha$ 处的取值）。

### 关键定理

> 若 $\alpha$ 是 $F$ 上的**代数元**，则 $F(\alpha) = F[\alpha]$，且：
> $$F(\alpha) \cong F[x] / (m_\alpha(x))$$
> 其中 $m_\alpha(x)$ 是 $\alpha$ 的极小多项式。

若 $\alpha$ 是超越元，则 $F(\alpha) \cong F(x)$（有理函数域）。

## 由不可约多项式构造扩域（核心考点）

### 构造方法

给定域 $F$ 和 $F[x]$ 中 $n$ 次不可约多项式 $f(x)$，商环：

$$E = F[x] / (f(x))$$

是域（因 $(f(x))$ 是极大理想），且 $E$ 是 $F$ 的 $n$ 次扩域。在 $E$ 中，$\bar{x} = x + (f(x))$ 是 $f$ 的一个根。

### 结论

> **任何不可约多项式都可以用来构造域的扩张**，使得该多项式在扩域中有一个根。

### 标准步骤

1. 给定域 $F$ 和不可约多项式 $f(x) \in F[x]$
2. 构造商环 $E = F[x] / (f(x))$
3. $E$ 是域（因 $f$ 不可约 $\Rightarrow$ $(f)$ 极大 $\Rightarrow$ $E$ 是域）
4. $F$ 通过 $a \mapsto \bar{a}$（常数多项式所在的陪集）嵌入 $E$
5. 在 $E$ 中，$\bar{x}$ 是 $f$ 的根

### 举例：构造 $\mathbb{C}$

$f(x) = x^2 + 1$ 在 $\mathbb{R}[x]$ 中不可约。构造：

$$\mathbb{C} \cong \mathbb{R}[x] / (x^2 + 1)$$

其中 $\bar{x}$ 对应 $i$（$i^2 = -1$）。

**验证**：在商环中，$(\bar{x})^2 = \overline{x^2} = \overline{-1} = -1$。

### 举例：构造 $\mathbb{Q}(\sqrt{2})$

$f(x) = x^2 - 2$ 在 $\mathbb{Q}[x]$ 中不可约（Eisenstein，$p=2$）。构造：

$$\mathbb{Q}(\sqrt{2}) \cong \mathbb{Q}[x] / (x^2 - 2)$$

其中 $\bar{x}$ 对应 $\sqrt{2}$。商环中每个元素可唯一写为 $a + b\sqrt{2}$（$a, b \in \mathbb{Q}$）。

### 举例：构造 $\mathbb{F}_4$

$\mathbb{F}_2 = \{0, 1\}$ 上，$f(x) = x^2 + x + 1$ 在 $\mathbb{F}_2[x]$ 中不可约。构造：

$$\mathbb{F}_4 \cong \mathbb{F}_2[x] / (x^2 + x + 1)$$

$\mathbb{F}_4 = \{0, 1, \omega, \omega+1\}$，其中 $\omega$ 是 $f(x)$ 的根（$\omega^2 + \omega + 1 = 0$，即 $\omega^2 = \omega + 1$）。

## 判定：$F[x]/(f(x))$ 何时是域

这是考试中的高频证明题：

> $F$ 为域，$f(x) \in F[x]$ 为非零多项式。则：
> $$F[x]/(f(x)) \text{ 是域 } \iff f(x) \text{ 在 } F \text{ 上不可约}$$

证明思路：
- $\implies$：若 $f = gh$ 可约，则 $(g)$ 是 $(f)$ 与 $F[x]$ 之间的非平凡理想，矛盾
- $\impliedby$：$F[x]$ 是 PID，不可约多项式生成的理想是极大理想 → 商环是域

## 总结：域的构造方法

| 方法 | 从 | 得到 | 条件 |
|---|---|---|---|
| 分式域 | 整环 $R$ | $\operatorname{Frac}(R)$ | $R$ 为整环 |
| 商环 | $F[x]$ 和不可约 $f(x)$ | $F[x]/(f(x))$ | $f$ 不可约 |
| 极大理想商 | 交换环 $R$ 和极大理想 $M$ | $R/M$ | $M$ 极大 |
