---
sidebar_position: 1
---

# 有限域

有限域（也称 Galois 域）是元素个数有限的域。它在编码理论、密码学和组合设计中具有核心地位。

## 有限域的基本性质

### 特征必为素数

> **定理**：有限域的特征必为素数 $p$。

证明：特征不可能是 $0$（否则包含 $\mathbb{Q}$，无限），故 $\operatorname{char}(F) = p$。

### 元素个数必为素数幂

> **定理**：有限域 $F$ 的元素个数必为 $p^n$，其中 $p = \operatorname{char}(F)$，$n = [F : \mathbb{F}_p]$。

记 $\mathbb{F}_q$ 表示 $q = p^n$ 元有限域。

### 乘法群是循环群

> **定理**：$\mathbb{F}_q^{\times} = \mathbb{F}_q \setminus \{0\}$ 是 $q-1$ 阶**循环群**。

**推论**：存在 $\alpha \in \mathbb{F}_q$（本原元），使 $\mathbb{F}_q^{\times} = \langle \alpha \rangle$。因此 $\mathbb{F}_q = \{0, 1, \alpha, \alpha^2, \ldots, \alpha^{q-2}\}$。

### $x^{q} - x$ 的分解

> **定理**：在 $\mathbb{F}_q[x]$ 中：
> $$x^{q} - x = \prod_{a \in \mathbb{F}_q} (x - a)$$

即 $\mathbb{F}_q$ 中每个元素都是 $x^{q} - x$ 的根。这给出了有限域的一个等价刻画：$\mathbb{F}_q$ 是 $x^q - x$ 在 $\mathbb{F}_p$ 上的分裂域。

## 存在性与唯一性

> **定理**：对任意素数 $p$ 和正整数 $n$，存在且（同构意义下）唯一的 $p^n$ 元有限域，记作 $\mathbb{F}_{p^n}$。

### 构造方法

设 $f(x)$ 是 $\mathbb{F}_p[x]$ 中 $n$ 次不可约多项式，则：

$$\mathbb{F}_{p^n} \cong \mathbb{F}_p[x] / (f(x))$$

例如 $\mathbb{F}_8$ 可由 $\mathbb{F}_2[x]/(x^3+x+1)$ 构造。

## 子域结构

### 定理

$\mathbb{F}_{p^n}$ 的子域恰为 $\mathbb{F}_{p^d}$，其中 $d \mid n$。

- $\mathbb{F}_4 \subset \mathbb{F}_{16}$（$2 \mid 4$）
- $\mathbb{F}_8$ 不包含 $\mathbb{F}_4$（$2 \nmid 3$）

### 所有子域

$\mathbb{F}_{p^n}$ 的所有子域为 $\{\mathbb{F}_{p^d} \mid d \mid n\}$，构成一个与 $n$ 的正因子一一对应的格。

## Galois 群与 Frobenius 自同构

### Frobenius 自同构

在 $\mathbb{F}_{p^n}$ 上，Frobenius 映射：

$$\varphi_p: \mathbb{F}_{p^n} \to \mathbb{F}_{p^n}, \quad a \mapsto a^p$$

是域自同构（且是 $\mathbb{F}_p$-自同构）。

### Galois 群

$\mathbb{F}_{p^n} / \mathbb{F}_p$ 的 Galois 群是 $n$ 阶循环群：

$$\operatorname{Gal}(\mathbb{F}_{p^n} / \mathbb{F}_p) = \langle \varphi_p \rangle \cong \mathbb{Z}_n$$

## 有限域上的多项式

### 不可约多项式分解

在 $\mathbb{F}_p[x]$ 中，$f(x) = x^{p^n} - x$ 分解为 $\mathbb{F}_p$ 上所有次数整除 $n$ 的不可约多项式的乘积。

> **推论**：$\mathbb{F}_p[x]$ 中存在任意次数的不可约多项式。这保证了任意阶有限域的存在性。

### 举例：$\mathbb{F}_2[x]$ 中的不可约多项式

| 次数 | 不可约多项式 |
|---|---|
| 1 | $x, x+1$ |
| 2 | $x^2 + x + 1$ |
| 3 | $x^3 + x + 1, x^3 + x^2 + 1$ |

## 有限域 vs 无限域 速查

| 性质 | 有限域 $\mathbb{F}_{p^n}$ | 无限域 $\mathbb{Q}$ |
|---|---|---|
| 元素个数 | $p^n$ | 无限 |
| 特征 | $p$ | $0$ |
| 乘法群 | 循环群 | 不是循环群 |
| 代数闭包 | 不是代数闭域 | 代数闭包为 $\overline{\mathbb{Q}}$ |
| Frobenius | 是域自同构 | 不是（$a^p$ 不是同态） |
